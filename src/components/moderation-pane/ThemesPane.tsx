import { createSignal, onMount, For, Show } from "solid-js";
import { styled } from "solid-styled-components";
import Button from "../ui/Button";

const Container = styled("div")`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`;

const ThemeCard = styled("div")`
  background: var(--background-secondary, #1e1e2e);
  border: 1px solid var(--border-color, #313244);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CodePreview = styled("pre")`
  background: var(--background-tertiary, #11111b);
  padding: 12px;
  border-radius: 6px;
  max-height: 150px;
  overflow-y: auto;
  font-family: monospace;
  font-size: 0.85rem;
  color: #cdd6f4;
  white-space: pre-wrap;
`;

const ButtonRow = styled("div")`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export default function ThemesPane() {
  const [pendingThemes, setPendingThemes] = createSignal<any[]>([]);
  const [loading, setLoading] = createSignal(true);

  const fetchPending = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/admin/themes/pending");
      if (res.ok) {
        const data = await res.json();
        setPendingThemes(data);
      }
    } catch (err) {
      console.error("Fehler beim Laden der ausstehenden Themes:", err);
    } finally {
      setLoading(false);
    }
  };

  onMount(fetchPending);

  const updateStatus = async (id: string, status: "APPROVED" | "REJECTED") => {
    try {
      const res = await fetch(`/api/v1/admin/themes/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        // Nach Erfolg direkt aus der Liste im UI entfernen
        setPendingThemes((prev) => prev.filter((t) => t.id !== id));
      }
    } catch (err) {
      console.error("Fehler beim Aktualisieren des Theme-Status:", err);
    }
  };

  const previewTheme = (cssCode: string) => {
    let styleTag = document.getElementById("admin-preview-theme");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "admin-preview-theme";
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = cssCode;
  };

  return (
    <Container>
      <h3>Ausstehende Theme-Einreichungen ({pendingThemes().length})</h3>

      <Show when={loading()}>
        <p>Lade ausstehende Themes...</p>
      </Show>

      <Show when={!loading() && pendingThemes().length === 0}>
        <p>Keine ausstehenden Themes zur Überprüfung vorhanden.</p>
      </Show>

      <For each={pendingThemes()}>
        {(theme) => (
          <ThemeCard>
            <h4>{theme.title}</h4>
            <p style={{ "font-size": "0.9rem", color: "var(--text-secondary)" }}>
              {theme.description || "Keine Beschreibung vorhanden."}
            </p>
            <CodePreview>{theme.cssCode}</CodePreview>

            <ButtonRow>
              <Button
                label="Vorschau testen"
                onClick={() => previewTheme(theme.cssCode)}
              />
              <Button
                label="Ablehnen"
                onClick={() => updateStatus(theme.id, "REJECTED")}
              />
              <Button
                label="Freischalten"
                onClick={() => updateStatus(theme.id, "APPROVED")}
              />
            </ButtonRow>
          </ThemeCard>
        )}
      </For>
    </Container>
  );
}