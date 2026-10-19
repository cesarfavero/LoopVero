# Group chat: renderer and harness contract (Grok Bot 0.71.2)

## Artifact identity and method

The reference is `Grok Bot.app/Contents/Resources/app.asar`, SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`. Only renderer members were extracted under the ignored `.research/reference-electron/` directory. The app bundle and `GrokBotResearch/` originals were not modified.

REA analyzed the extracted renderer directory and selected the exact NewChatBar module. Evidence `ev_15f492c001f24a6bb5c4c9d69d062095a9d17515012c2ed6ff3ee11edfb6752e` records 35,906 bytes, 11,233 AST nodes and zero parse failures for `assets/chunk-new-chat-bar-BqaDAl0q.js`. Its semantic graph is partial (8,646 semantic unknowns) and 536 other renderer files were not analyzed. The app-entry analysis `ev_1cf3516166adb6b79c323dbf5e59cf43d456b391df2d341d1b25a4af6d347208` parsed 1,801,380 bytes and 462,056 AST nodes with zero parse failures, but reports partial semantics and a resource constraint on the entry bundle. The earlier full selected renderer run `ev_08a92322ebc173752a7aa5e4daaa4af3a211bdc967aa9548d860ef2de77b2a45` also parsed the module with zero failures. All these are static evidence; REA did not execute renderer code.

The extracted renderer root hash is `689870cbf0b872a0851c9c5d74a4c400b1e9d3569847b7517621402f6d801ed6`. It is distinct from the original ASAR hash because it identifies the extracted directory inventory. The exact NewChatBar bytes hash is `0a1a27cca8e9a4342e3683f0578d9a3ef77aca4c9ca89ded68189ca56f8628d7`.

## Recovered renderer contract

`NewChatBar` is exported from `chunk-new-chat-bar-BqaDAl0q.js`. Its parent supplies agents, selected recipients, group mode, creation-pending state, team agents and callbacks for recipient changes, group mode, team-bot creation, commit and close. The component is not a plain text field: it renders recipient chips and a combobox/listbox with keyboard navigation, highlighted options, loading state, localized empty states and virtualized rows. The list has ARIA combobox/option relationships and the root reports `aria-busy` during creation.

Recipient selection is differentiated by kind (`agent`, `human`, or a new/provisional agent). Enter, Tab, comma, Backspace, Escape and arrow keys have explicit branches. The component treats normal recipient selection, the team-agent picker and group-mode entry as separate paths. It receives the current group chat and team data to calculate valid candidates. Those details come from the module AST and readable code, not a design mock or screenshot.

The parent state machine is in `index.eager-app-DSuGVQNC.js`. Its `wze` transaction checks recipient and send-draft preconditions; starts a group creation intent; associates the current composer draft; creates provisional recipient agents when required; and calls `roster.createGroup` with `name`, `description`, `memberAgentIds`, and optional `humanMemberUserIds`. It cleans up provisional agents on abandonment and selected failures. On success it attaches the returned group agent to the creation intent, migrates or clears/restores the draft as appropriate, optionally sends the first message, and selects the created group. On errors it reports failure, attempts provisional cleanup, recovers the draft and records retryability according to the failure boundary.

The roster wrapper calls the underlying `createGroup` operation and ingests the returned group into local roster state. It refreshes the roster when the created group uses the Temporal harness. `setGroupMembers` similarly calls the underlying operation and refreshes for Temporal groups. These are static call paths; whether any gate is enabled in a live account is not established by the bundle alone. The observed feature gate name in renderer code is `grok_bot_multiplayer`; separate team/feature checks also constrain which options appear.

## Harness-side group entity

The extracted `GrokBotResearch/sand/sand-host/host-main.cjs` contains a Sand Host group implementation. `createGroup` validates requested member IDs against existing agents, rejects nested groups, deduplicates and caps the member list, then creates an agent record and seals it as a group. The local Sand Host group configuration uses `sand-group.json` with a version and member IDs, and roster emission follows creation. `setGroupMembers` validates and persists a new non-empty member list under corresponding constraints.

This establishes a group entity in the supplied host harness code. It does not establish where the production server stores group data, the full authorization behavior for human members, or that this extracted host file is byte-identical to the original VM at the time the desktop binary was built. Do not equate the local Sand Host JSON file with remote persistence.

## Coordinator and service protocol

REA analyzed the original ASAR with only `dist/node-agent-coordinator/main.cjs` and `dist/electron-main/proto.cjs` selected: Evidence `ev_66a6fc544fd707e57a2fbc25412925ed73dc16493b74e665e4f39d2a1e4a244b`, artifact hash unchanged. Both files parsed with zero failures (893,328 and 1,234,480 bytes respectively), but their expanded semantic graphs hit resource constraints. The remaining statements here are bounded to exact decoded code declarations/branches confirmed against extracted bytes and are not a claim of complete REA graph reachability or runtime invocation.

The Coordinator schema for `createGroup` accepts `name`, optional `description`, `memberAgentIds`, optional `humanMemberUserIds`, `namedBy`, optional `creationRoute` (`box` or `temporal` with scope), and optional `clientNonce`. `setGroupMembers` accepts `id`, `memberAgentIds`, and optional `requesterAgentId`. A local dispatch branch is selected when there are no human members, no explicit route or nonce, and no member requiring Temporal routing. Otherwise, the Coordinator resolves an omitted creation route. A `box` route dispatches locally and rejects human room members; a Temporal/server route calls the control client with a nonce and reports unsupported-server errors when the RPC is unimplemented. This establishes multiple routes in the shipped Coordinator code; it does not establish which route is enabled for a particular account at runtime.

`dist/electron-main/proto.cjs` declares unary RPCs `CreateGrokBotRoom` and `SetGrokBotRoomMembers`. The create request contains `agent_id`, `name`, `description`, `member_agent_ids`, and `human_member_user_ids`; its response carries a `GrokBotAgent`. The membership request contains `agent_id` and `member_agent_ids`. The same generated service table exists in `node-agent-coordinator/main.cjs`; both were parsed as inert code. The generated declaration gives the wire contract, not server implementation or server-side persistence. The service method table also declares separate room-member turn request/cancel/result calls, so group orchestration is represented beyond the renderer, but its execution semantics require further mapping in the supplied host and service contracts.

## Reconstruction implications

The current `apps/desktop` data model stores individual bots and cannot represent group members, human recipients, provisional-agent cleanup, group draft migration or roster refresh. A faithful implementation therefore requires a first-class group/room contract across persistence, coordinator, renderer and transcript before adding a group UI. The model must retain recipient kinds and the original creation/send/draft states; reducing the feature to a visual multi-select over independent bots would not preserve the observed lifecycle.

The current app also does not implement the original renderer shell or its navigation/state graph. This contract covers the group composer and creation lifecycle only; it is not evidence of complete UI parity. The CodexRouter global service/configuration is outside the replica and must not be changed. Any replica provider integration remains scoped to this app's local configuration.

## Remaining evidence work

- Map the exact parent callsite and feature-gate conditions that mount `NewChatBar`, including the user-facing creation routes.
- Trace `createGroup` from renderer roster store through Coordinator schema/policy to the local host API and remote `GrokBotService` route, preserving local/remote distinctions.
- Recover the original group transcript, sidebar row, membership management, invite/add/remove people and failed/empty/loading states from their exact chunks and callsites.
- Compare state-matched original and reconstruction captures only after code-derived screen states are implemented; no parity claim follows from these static findings.
- Continue mapping every primary renderer surface and its CSS/assets before replacing generic shell elements.

## Group connect/waiting module

REA analyzed the exact ASAR member `dist/renderer/assets/chunk-group-chat-connect-waiting-DgOnN3kG.js` under Evidence `ev_7b1a8d828a0f5d11a156e6cb7b2567a77786a67166d6344ab1635dee98639328`. It parsed without a syntax failure. The 1,769-byte module exports a helper that maps a targeted response to `{agentId, groupChat:{sessionId, waitingOn}}` using `answerAt.agentId`, `answerAt.sessionId`, the current viewer auth ID and a `waitingOn` helper. Three additional exports produce localized truncated labels from member/server names. This is a small support module, not the main group transcript renderer. REA's selected application inventory did not retain the module as a standalone semantic graph node, so the behavior here is from exact source inspection corroborated by the successful focused REA parse; no UI/runtime branch is claimed.

The entry bundle imports this module's helper into assistant response handling, showing a static consumer path from targeted/group reply state to a group-chat descriptor. The parent import/use condition is not fully resolved in the partial entry semantic graph. Continue following that descriptor into transcript/session composition and the room-member turn RPCs before implementing the group transcript.
