# Grok Bot 0.71.2 proactivity: original evidence ledger

## Answer to the central question

**The available local artifacts do not establish who decides to start spontaneous work.** The Sand Eval Runner consumes a `platformProactivity` flag and changes prompt-origin/routing metadata. The inspected local files do not identify a producer, eligibility scorer, due-set implementation, or complete dispatch path. A generated service comment explicitly excludes changelog campaign CRUD from enrolling users, arming the proactivity due-set, or dispatching wakes. That makes an external service boundary plausible, but does not prove which remote service owns the decision.

## Findings by lifecycle stage

| Stage | Finding | Classification | Evidence and limit |
| --- | --- | --- | --- |
| Context collection | No platform opportunity collector was located in the bounded source pass. Ordinary user/session context code exists elsewhere in the large harness. | NOT_FOUND (bounded only) | `PROACTIVITY_TRACE_UPDATE.md`; search scope is selected ranges and literal identifiers, not a complete reachable-program proof. |
| Opportunity identification/scoring | No algorithm, model, score, utility/risk budget, or ranking source was identified. | UNVERIFIED | No positive code or runtime evidence in the reviewed local artifacts. |
| Enrollment/due scheduling | Generated service comment says changelog campaign writes do not enroll, arm the due-set, or dispatch wakes. | CONFIRMED | `GrokBotResearch/sand/sand-host/host-main.cjs:215113-215124`; comment identifies a boundary, not the implementation or its owner. |
| Wake producer | `platformProactivity` is read at runner locations 526081, 589678, and 591706. REA did not resolve the receiving value to its producer in a 3,116-byte selected excerpt. | UNVERIFIED | REA parent `ev_4eb913db755c285a77af81c6c729f43a99fe86948a0d178ec8f7708c909705b2`; summary `ev_0a0b8f2d8498bef995fd9c0c80f3c13867a22e0c15fbd49983945be6449ab17b`; property trace `ev_df0c7b52b9c83c233984d9c2b69ca4d08c95bd4d7a4fab3310bba06fc3d4333e`. Two reads, no write in the selected excerpt, unresolved receivers, 38 unknown relationships. This is not proof of absence elsewhere. |
| `PendingWake` | Local uses arm wakes for shell/cloud-agent and background subagent lifecycles. `pendingWake` in the wallpaper tone scheduler is a separate feature. | CONFIRMED distinction | `sand-eval-runner.cjs:490525,490580,490637,535278`; host callback setters 593806-593810; wallpaper code around `host-main.cjs:784967`. These do not prove the proactivity due-set. |
| Worker policy | `PLATFORM_PROACTIVITY_SUBAGENT_CLOSING` directs a quiet worker to call `WakeParent` for outward communication and says ordinary final output is private. | CONFIRMED as prompt text; runtime use UNVERIFIED | `sand-eval-runner.cjs:528641-528648`; no worker factory/callsite was confirmed in the inspected files. |
| `WakeParent` | Parent-mediated tool accepts non-empty message, records wake payload, aborts the current worker run, and returns terminal handoff text. | CONFIRMED local contract | `sand-eval-runner.cjs:564143-564163`; this establishes the tool mechanism, not the policy that starts proactive work. |
| Parent continuation | Background dispatcher can surface `parentWakeRequested` completion; completion middleware can inject a hidden handoff into a later parent turn. | CONFIRMED in selected local code | `sand-eval-runner.cjs:535300-535490,583873-583947,586327-586418`; renderer delivery and idle-parent scheduling remain unresolved. |
| User delivery | Parent is instructed to produce outward communication; a complete parent-to-renderer path for this proactive flow was not established. | UNVERIFIED | Static prompt/queue evidence is not runtime evidence of visible delivery. |
| Infrastructure boundary | The source of the due-set/producer is likely outside the inspected runner, and may be a remote service. | REMOTE_DEPENDENCY / INFERRED | The changelog exclusion supports separation; no backend source or retained runtime/network trace identifies service ownership. |

## REA evidence and source identity

The application reference is `Grok Bot.app/Contents/Resources/app.asar`, SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`. The separate research VM file `GrokBotResearch/sand/sand-host/sand-eval-runner.cjs` has SHA-256 `5d951bc76d9747e0c37c494c4bfd82d787f2d81742ead2627e26d36e3b0ef54c`; `host-main.cjs` has SHA-256 `d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946`. The research files have not been proven byte-identical to packaged ASAR entries.

A separate focused REA pass on an 8,361-byte source excerpt recorded `ev_26e89b7790a7cf8f6f60b8e17cb69eb4bb2a2d5d98bf96bfb636519b15fc4a29` (summary `ev_bfd1b391df2f37a4a65f4861f81eaa3d6e1bf696a7b4598e60f45e8b17afa49c`) and a property trace `ev_8a4325c66a3ed9ae76a9ed42bf8782aa254b73072a445c3eb1ec22f6ecbad2cf`. It found ambiguous property matches and unknown object-flow relationships. A whole-file REA parse exceeded the MCP call's 300-second ceiling. All conclusions remain bounded static-source observations; no original app execution, backend trace, or live request was observed in this investigation.

## Reconstruction boundary

The local opt-in objective follow-up in TheGrok is an independent implementation. Its recent-message window, quote grounding, token-overlap score, cooldown, UI and explicit approval are local design choices, not recovered Grok Bot policy. It does not reproduce the remote producer, a platform proactive subagent, original `WakeParent`, or the original dispatcher. Preserve this distinction in product claims and the parity matrix.

## Next evidence that can resolve remaining questions

1. Analyze the exact ASAR modules corresponding to the runner and their import/call relations, while retaining integrity contradictions and partial-graph limits.
2. Locate generated RPC contracts that carry platform wake payloads and trace their producer in coordinator/client code.
3. If the authorized original runtime is available and logged in, passively observe its requests/events during a controlled account state; preserve privacy and avoid triggering external side effects.
4. Obtain backend source or service trace for enrollment and due-set ownership. Without it, algorithm details remain unknown.
