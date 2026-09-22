import { createSignal, createMemo, For, Show, onMount, batch } from "solid-js";
import { styled, css } from "solid-styled-components";
import Button from "../ui/Button";
import Input from "../ui/input/Input";
import { t } from "@nerimity/i18lite";
import { ThemePreset, themePresets } from "@/common/themes";
import { Skeleton } from "../ui/skeleton/Skeleton";

import useStore from "@/chat-api/store/useStore";
import { Notice } from "../ui/Notice/Notice";
import ThemeCard from "./ThemeCard";
import { ExplorePageContainer, SearchHeader } from "./ExplorePane";
import { MetaTitle } from "@/common/MetaTitle";

const GridLayout = styled("div")`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

const SectionTitle = styled("h3")`
  margin: 16px 0 8px 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-color);
`;

const ActionButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-end;
`;

const ModalOverlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled("div")`
  background: var(--background-secondary, #1e1e2e);
  padding: 24px;
  border-radius: 8px;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TextArea = styled("textarea")`
  width: 100%;
  height: 120px;
  background: var(--background-tertiary, #11111b);
  color: var(--text-color, #ffffff);
  border: 1px solid var(--border-color, #313244);
  border-radius: 4px;
  padding: 8px;
  font-family: monospace;
  resize: vertical;
`;

export default function ExploreThemes() {
  const [themes, setThemes] = createSignal<Record<string, ThemePreset>>({});
  const [loading, setLoading] = createSignal(true);
  const { header } = useStore();
  const [search, setSearch] = createSignal("");

  // Modal State für Formular
  const [showSubmitModal, setShowSubmitModal] = createSignal(false);
  const [submitTitle, setSubmitTitle] = createSignal("");
  const [submitDesc, setSubmitDesc] = createSignal("");
  const [submitCss, setSubmitCss] = createSignal("");
  const [isSubmitting, setIsSubmitting] = createSignal(false);

  const REMOTE_THEMES_URL =
    "https://raw.githubusercontent.com/nexcord-app/themes/main/themes.json";

  onMount(() => {
    header.updateHeader({
      title: t("explore.themes.title"),
      iconName: "explore",
    });
    fetchThemes();
  });

  const fetchThemes = async () => {
    setLoading(true);
    try {
      // 1. GitHub Themes laden
      const githubRes = await fetch(REMOTE_THEMES_URL, { cache: "no-store" });
      const githubThemes = githubRes.ok ? await githubRes.json() : {};

      // 2. Datenbank-Themes laden (API)
// RICHTIG:
      const dbRes = await fetch("https://server.nexcord.de/api/explore/themes");
      const dbThemesList = dbRes.ok ? await dbRes.json() : [];

      // API Array in Record Format umwandeln
      const dbThemesRecord: Record<string, ThemePreset> = {};
      dbThemesList.forEach((theme: any) => {
        dbThemesRecord[theme.title] = {
          name: theme.title,
          description: theme.description,
          css: theme.cssCode,
        } as any;
      });

      // Zusammenführen
      batch(() => {
        setThemes({ ...githubThemes, ...dbThemesRecord });
        setLoading(false);
      });
    } catch (err) {
      console.error(err);
      batch(() => {
        setThemes({});
        setLoading(false);
      });
    }
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!submitTitle() || !submitCss()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("https://server.nexcord.de/api/explore/themes/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: submitTitle(),
          description: submitDesc(),
          cssCode: submitCss(),
        }),
      });

      if (res.ok) {
        alert("Theme erfolgreich eingereicht! Es wird nach Prüfung durch einen Admin freigeschaltet.");
        setShowSubmitModal(false);
        setSubmitTitle("");
        setSubmitDesc("");
        setSubmitCss("");
      } else {
        alert("Fehler beim Einreichen des Themes.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const officialThemes = () =>
    Object.entries(themePresets).filter(([name]) =>
      search() ? name.toLowerCase().includes(search().toLowerCase()) : true
    );

  const communityThemes = createMemo(() =>
    Object.entries(themes())
      .filter(([name]) => !themePresets[name] && name !== "Template")
      .filter(([name]) =>
        search() ? name.toLowerCase().includes(search().toLowerCase()) : true
      )
  );

  return (
    <ExplorePageContainer>
      <MetaTitle>{t("explore.themes.title")}</MetaTitle>
      <SearchHeader>
        <Input
          label={t("general.searchPlaceholder")}
          onText={setSearch}
          value={search()}
          class={css`
            flex: 1;
            min-width: 200px;
            span {
              margin-bottom: 2px;
            }
          `}
        />
        <ActionButton
          label="Theme einreichen"
          iconName="add"
          margin={[19, 0, 0, 0]}
          onClick={() => setShowSubmitModal(true)}
        />
        <ActionButton
          label="GitHub"
          iconName="code"
          margin={[19, 0, 0, 0]}
          href="https://github.com/nexcord-app/themes"
          target="_blank"
        />
      </SearchHeader>

      <Notice
        type="info"
        description={t("explore.themes.themesHeaderDescription")}
      />

      <Show when={officialThemes().length}>
        <SectionTitle>{t("explore.themes.officialThemes")}</SectionTitle>
        <GridLayout>
          <For each={officialThemes()}>
            {([name, themeObj]) => (
              <ThemeCard name={name} themeObj={themeObj} explore />
            )}
          </For>
        </GridLayout>
      </Show>

      <SectionTitle>{t("explore.themes.communityThemes")}</SectionTitle>
      <GridLayout>
        <Show when={loading()}>
          <For each={Array(6).fill(null)}>
            {() => <Skeleton.Item height="200px" width="100%" />}
          </For>
        </Show>

        <Show when={!loading() && communityThemes().length > 0}>
          <For each={communityThemes()}>
            {([name, themeObj]) => (
              <ThemeCard name={name} themeObj={themeObj} explore />
            )}
          </For>
        </Show>

        <Show when={!loading() && communityThemes().length === 0}>
          <div>{t("explore.themes.noCommunityThemes")}</div>
        </Show>
      </GridLayout>

      {/* Modal zum Einreichen */}
      <Show when={showSubmitModal()}>
        <ModalOverlay onClick={() => setShowSubmitModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Neues Theme einreichen</h3>
            <Input
              label="Theme Name"
              value={submitTitle()}
              onText={setSubmitTitle}
            />
            <Input
              label="Beschreibung (Optional)"
              value={submitDesc()}
              onText={setSubmitDesc}
            />
            <label style={{ "font-size": "0.85rem" }}>CSS Code:</label>
            <TextArea
              placeholder="/* Deinen Custom CSS Code hier einfügen */"
              value={submitCss()}
              onInput={(e) => setSubmitCss(e.currentTarget.value)}
            />
            <div style={{ display: "flex", gap: "8px", "justify-content": "flex-end" }}>
              <Button label="Abbrechen" onClick={() => setShowSubmitModal(false)} />
              <Button
                label={isSubmitting() ? "Sende..." : "Einreichen"}
                disabled={isSubmitting()}
                onClick={handleSubmit}
              />
            </div>
          </ModalContent>
        </ModalOverlay>
      </Show>
    </ExplorePageContainer>
  );
}