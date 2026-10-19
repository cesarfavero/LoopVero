# Renderer composition and visual contract (static, code-derived)

## Scope and method

This note traces the installed Grok Bot 0.71.2 renderer from the shipped `app.asar`; it does not infer the design from screenshots. REA analyzed the app as inert JavaScript and HTML. The bootstrap was not executed, so component ordering/behavior below is static unless marked otherwise.

- Artifact: `Grok Bot.app/Contents/Resources/app.asar`
- app.asar SHA-256: `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10e0e860`
- REA app analysis: `ev_1d381e7cafe5b611c3eb37de538e82caa4af3bcd99d035d6e0dc05fc95590b74`; source-selected renderer pass `ev_75950d51496f60b89bd13cbc6265f90bbeb917bbc882825f34546493088c43ec`.
- Extracted files were read from the REA extraction at `/var/folders/8l/vww5d7js4mb0mdd9m8fn8n940000gn/T/rea-extracted-74c81482-9bf5-4a1f-ac1c-7068bf14db0a/`. They remain reference material; this report does not copy them into the product.
- Principal renderer files: `dist/renderer/index.html`, `assets/index-wlkGG389.js` (entry, SHA-256 `5194bef4ba4cbe4ffb697273f1458b7bca3733fb35d3c4c8d165fd4dbc9d0154`), `assets/index.eager-platform-DKZJbDqM.js`, `assets/index.eager-app-DSuGVQNC.js` (SHA-256 `cb1f20a05ee14c4e6c8f5fe37e7cad7074ed432b7f67ca29b3fd928042f1547b`), and `assets/index-DkV65EBE.css` (SHA-256 `30beefeee1dd1b707732f529954a6ab7b9be5bbb43fa2ec4ac9525c4dee7ed5a`).

REA's source-selected graph is partial: 610 inventoried files were outside this pass, and semantic graph extraction hit a result-resource limit for the entry bundle. The app artifact itself also contains six integrity contradictions in native/dependency files; those bytes are marked untrusted and are irrelevant to these renderer conclusions. REA reports `graph.coverage.status=partial`; a missing edge or unmatched feature is not evidence of absence. A broad literal `Sidebar` feature trace exceeded the MCP response budget, so it is not used as a negative result. The optional Wakaru source recovery pass could not run because no supported `REA_WAKARU_COMMAND` is installed; no alternative unreviewed recovery tool was run.

## Entrypoint and React root

`index.html` identifies the product as “Grok Bot”, sets a self-only CSP with explicit media/network exceptions, preloads `cursor-icons-16-...woff2`, loads `index-wlkGG389.js` as its module entry, preloads the eager common, vendor, platform and app chunks, then loads the main CSS. The page has a `#root` and a separate `#sand-boot-shell`. Until the root is populated the shell is transparent; `:root:not([data-theme])` also starts transparent. This prevents an uninitialized theme from flashing a hard-coded surface.

The entry bundle obtains `document.getElementById("root")`, asserts it exists, and calls React `createRoot(...).render(...)`. The visible root is wrapped in React StrictMode and a nested set of localization, feature, error boundary, menu, client/state, bot and parser providers. Component identifiers are minified, so their names should not be guessed from those wrappers. The renderer is a large application shell with many lazy chunks, not a standalone chat mockup or single fixed route.

The app chunk contains distinct UI state interfaces for `sidebarLayout`, `sidebarUnreadOnly`, `infoPaneLayout`, `infoPaneOpen`, `infoPaneWidth`, `infoPaneReveals` and `isThreadSideBySide`, each bound to setters/actions in shared UI state. It also registers `trays` and `main-agent` state surfaces. These are code-level evidence for a resizable/navigation sidebar, an independently resizable information pane, and a thread that can switch between side-by-side and other layouts. The actual persisted initial widths and exact default pane arrangement are not established by this pass.

## Chat, thread and composer evidence

The entry bundle contains a chat-shell component that composes the semantic class `sand-chat` with atomic `sand-*` classes, reads the `main` task-thread layout, and applies `data-theme` to the chat surface. Its code distinguishes `takeover` and `held` thread layouts and wires chat ref, drag/drop bindings and message selection/copy behavior. CSS exposes a minimum chat width token of `424px`; the actual window and pane measurements remain state/runtime dependent.

The app bundle’s conversation model handles typed send-message entries, streaming state, user messages, widgets, attachments, reply targets, drafts and composer restoration. Composer slots are explicitly resolved as `boundComposer`, `mainComposer` or `parkStore`; an empty draft can be restored to its bound/recovered agent slot, while non-empty or unmatched drafts are parked to avoid losing or misbinding text. This is a multi-agent/task-aware composer lifecycle, not a plain text field attached to one fixed chat.

The source strings and handlers cover new chat, group chat, Bots, Inbox, Apps, settings, notifications, files, computer, permissions and other surfaces. The selected static graph cannot establish the complete route table or the condition for rendering every surface. No claim of full route coverage is made.

## Theme and concrete visual tokens

The shipped base CSS defines a light root palette as the fallback values for its semantic tokens:

| Token | Base value |
|---|---|
| `--sand-bg-pane` | `#ffffff` |
| `--sand-bg-chrome` | `#fcfcfc` |
| `--sand-bg-sidebar` | `#f5f5f5` |
| `--sand-bg-elevated` | `#ffffff` |
| `--sand-bg-elevated-hover` | `#f1f1f1` |
| `--sand-bg-primary` | `#1c1c1c` |
| `--sand-text-primary` | `#1c1c1c` |
| `--sand-text-secondary` | source-defined semantic value |
| `--sand-fill-bubble-agent` | `#1c1c1c0f` |
| `--sand-fill-bubble-user` | `#1c1c1cff` |

Typography tokens in the same base CSS include 11/12/13/14/15/17/22/26px (`xxs` through `xxxl`) and weights 400/500/600. The base sans stack is `--cursor-font-family` / VS Code font family / system UI fallback; mono uses the Monaco/VS Code/system monospace stack. There are semantic tokens for pane/chrome/sidebar, elevated/hover/active surfaces, primary/secondary/tertiary/quaternary backgrounds, text hierarchy, focus/borders, and colored status/accent families. The CSS also includes extensive component-specific atomic classes and semantic classes; replacing the root colors alone does not reproduce the renderer.

Theme state is provided through `theme.snapshots` and `theme.setPreference`; settings expose a preference action and pending/failure state. The platform bundle consumes theme and color attributes, and the chat shell receives a theme value through a `data-theme` attribute. Therefore the `:root` palette is a base/fallback contract, not proof that a particular light/dark selection is active for every user. The artifact’s effective first-run appearance depends on the boot snapshot and saved preference; this exact startup result needs a controlled run or deeper targeted trace.

The source does not support a hand-built dark dashboard as a faithful default. A recreation should reproduce the shell/panes and task-aware conversation layout from the component contracts, use the semantic token system and honor theme selection, then compare a running build only as verification after the code-based implementation exists.

## Findings vs unknowns

**Directly supported by shipped code:** renderer entry file and provider-based React mount; separate boot shell; preloaded renderer chunks and CSS; root light semantic color/font-scale tokens; theme preference state; semantic chat shell with `data-theme`; task layout variants; sidebar and information-pane state/actions; resizable info pane; side-by-side thread control; composer draft routing/restoration states.

**Not resolved by this bounded pass:** friendly/original component names; full route-to-component map; exact initial user theme, pane widths, and per-account settings; complete interaction-to-render paths through lazy chunks; default light/dark theme without observing the boot snapshot; runtime parity. Static bundle relations are not proof that a path executed.

## Evidence references

- REA `analyze_javascript_application`: `ev_1d381e7cafe5b611c3eb37de538e82caa4af3bcd99d035d6e0dc05fc95590b74` (renderer files selected in the original app graph; partial graph and six unrelated integrity contradictions are recorded in this Evidence).
- REA `analyze_javascript_application`: `ev_75950d51496f60b89bd13cbc6265f90bbeb917bbc882825f34546493088c43ec` (entry renderer pass; REA noted semantic graph resource constraint).
- REA broad `Sidebar` string trace: `ev_29530749edd738d4101d373d441e85c782e0b7118c53b64805f7dc3396b76e13` (operation completed but response exceeded stdio budget; do not use as a completeness or absence claim).
- Exact source/CSS identities are recorded above so future REA or static passes can re-open the same files and hashes.

## Follow-up REA selection (2026-10-19)

The REA application analyzer was rerun against the same ASAR with the integrity policy `record-and-continue`, so the six contradictory unpacked/native files were retained only as untrusted and are unrelated to the renderer evidence below. Exact selected sources were `dist/renderer/index.html`, `index-wlkGG389.js`, `index.eager-app-DSuGVQNC.js`, NewChatBar, draft composer, thread card, settled-message card, prompt editor, and Team Bot overview panel. Parent Evidence: `ev_9310ccabd8cf7ea6dd3d5fd9e6b6564dcf097cbbbfab1e9ac3c70c41c6f5e2ae`; summary view: `ev_61310522a66ff8abc1d8aa67e885253df45b052a7ec59c20544ef3aa44a07394`.

REA inventoried 612 relevant files, parsed the 8 selected JavaScript files (4,236,804 text bytes, 1,282,644 visited AST nodes, 6,159 findings, zero parse failures), and left 603 files outside the explicit selection. Semantic coverage remains partial and truncated: 11,228 semantic unknowns remain. The selected analysis therefore improves code relationships for those files but does not close the app-wide component map.

REA module-item views confirm version-specific module identities and these exports: the draft composer binds export `d` to local `ls`; the thread card binds `T` to `N`; the settled-message card exposes `S` and `b`; and Team Bot overview panel exposes `TeamBotOverviewPanel`. The entry bundle has a 2,289,087-byte minified file and many exports; their short names are not semantic component names. No runtime invocation follows from these exports alone. The extraction map and complete renderer asset counts are in [RENDERER_ASSET_INVENTORY.md](RENDERER_ASSET_INVENTORY.md).

**Next trace:** use the entry's chunk loader and `index.eager-app` imports as roots, then connect exact named chunks to module exports and callsites. Continue by grouping each reachable surface (navigation, chat, agent/team, settings, tools/computer/files, automation, onboarding) and tracing its state setters, events, CSS class strings, matching CSS declarations, and asset references. Each link must retain REA Evidence/source ranges and distinguish unresolved/dynamic edges. Until those groups are covered, the code-to-UI map is incomplete and the visual reconstruction remains gated.

## Entry-to-feature map progress (2026-10-19)

REA feature traces now seed exact module paths against the focused app Evidence. `chunk-new-chat-bar-BqaDAl0q.js` resolves to a dynamic-import edge in the entry bundle at line 33 columns 262080–262158; `chunk-thread-card-Bd1pjUBX.js` resolves at line 44 columns 217970–222383. Evidence IDs: NewChatBar trace `ev_7bc6836e912ec2716dbcb396b83585b315b2ad42fdd395d4f5cd93ea0210986b`; thread trace `ev_0f2f8129428aa999b56d9fea9fe54a98c5aa206f1f353604ed89580fac430f5a`. Both traces identify static relationships and explicitly disclaim runtime execution; source application graph coverage is partial.

Direct surrounding-code inspection maps NewChatBar's lazy import to the `NewChatBar` export and wrapper `YK`. At entry line 33, a parent passes `agents`, creation/group-mode flags, recipients, menu request, and add/remove/commit/close/create-team callbacks. The same chunk preload helper `jBe` is registered as one of the renderer startup tasks (`KJ.tasks`, entry line 47); that proves the preload callback is scheduled by this bootstrap code, not that the feature is rendered. Entry line 44's thread-card chunk is present in a registry of feature view modules. `index-wlkGG389.js` maps 63 feature source paths to lazy view chunks, including chat message, attachment, connector, tool permission, computer, team management, plugins, settings, billing and voice-call views. The mapping is strong evidence of code organization, but the full registry dispatcher, state conditions, route/callers and actual display state still need tracing.

The focused semantic graph did not contain Team Bot overview panel among analyzed modules' import edges; its inventory presence and export alone do not establish a callsite. The 63-entry feature registry also does not enumerate all screens or all lazy React chunks (the renderer has 534 JavaScript files). This work narrows the next investigation to the entry's view-registry dispatch and its primary chat/shell composition, not to writing visual CSS.
