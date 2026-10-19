# Platform proactivity architecture (research, Grok Bot 0.71.2)

## Scope and result

This is a read-only static investigation of the packaged application and the supplied Sand Host source. It does **not** recover the end-to-end `platformProactivity` algorithm. The evidence supports a mediated architecture: a server-side due mechanism can dispatch work to an isolated/quiet proactive subagent; the subagent can hand a decision or message to the parent using `WakeParent`, and the parent owns visible chat delivery. The source of eligibility, opportunity generation/scoring, and dispatch criteria is not in the examined local code.

## Evidence-backed flow

1. **Remote trigger/state (inferred boundary):** the generated service contract in `GrokBotResearch/sand/sand-host/host-main.cjs:215113-215124` explicitly says creating changelog campaign records does not enroll users, arm the “proactivity due set,” or dispatch wakes. This distinguishes campaign authoring from the scheduler/dispatcher, but does not reveal the latter's implementation.
2. **Proactive worker constraints:** `host-main.cjs:733924-733930` defines `PLATFORM_PROACTIVITY_SUBAGENT_CLOSING`: remain quiet, do not write the main chat, call `WakeParent` to reach the user/parent, and treat ordinary final output as private to that run. This is prompt construction, not proof of runtime execution.
3. **Tool boundary:** `host-main.cjs:782076-782078` defines a counter for tool calls refused because the readonly proactivity subagent's reduced tool list omits them. This supports a constrained-tool execution mode, but the metric alone does not establish what tools are always allowed.
4. **Wake and visible delivery:** the subagent closing identifies `WakeParent` as the sole route that starts the parent. The parent then produces the user-visible message. No local source found in this pass establishes the complete IPC/RPC path from remote dispatch into subagent construction or from wake receipt into renderer update.

## Architecture sketch

```text
Unobserved remote eligibility / due-set scheduler
        | dispatch/wake (exact contract and policy unknown)
        v
Platform proactivity subagent (quiet, restricted tool list)
        | WakeParent(reason / handoff; ends subagent run)
        v
Primary/parent agent (owns outward communication)
        | user-visible response (delivery implementation not traced)
        v
Conversation UI
```

The arrows from remote dispatch and to UI are architectural boundary inferences, not traced call paths. The local prompt text establishes the worker's intended communication constraints only.

## Confidence and open questions

- **High, static-source observation:** the explicit due-set exclusion in service comments and the `WakeParent`/quiet-run prompt text.
- **Medium, architectural inference:** a remote service owns enrollment/due dispatch and a locally hosted worker/parent handoff exists. Exact runtime wiring is not observed.
- **Unknown:** event sources; enrollment; due-set schema; eligibility window; scoring/ranking; rate limits; dismissal/feedback; retries/dedupe; account/client gates; trigger payload; worker launch path; persistence; renderer delivery.

Do not implement a purported recovered scoring algorithm from these findings. Further work should inspect the primary service API and perform authorized runtime observation of the original app, if available; static string presence is not execution evidence.

## Provenance

- Package: `Grok Bot.app/Contents/Resources/app.asar`, version 0.71.2 corroborated by extracted `package.json` at `/Users/cesarfavero/GrokBotResearch/extracted/package.json`.
- ASAR SHA-256: `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`.
- REA static analysis Evidence: `ev_1981b380e5d525877426762c8b140f26468c2115708016bb391d4fd68249d2e1` (parent analysis), summary projection `ev_138c8e515067dd080302609fc484da40c4aa9061377e200f3a2e0e49f3713e2a`.
- REA literal trace Evidence: `ev_7f7a6731a599ea8eda1ff6a0ee3b9f96275b3db6fb632e6854d5f1a82f92091e`; seed `proactivity` had no graph match. Because application graph coverage is partial, this is not evidence of absence.
- Sand Host source excerpt: `GrokBotResearch/sand/sand-host/host-main.cjs` (local file SHA-256 `d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946`). This is a separate research-tree artifact and has not been proven byte-identical to the ASAR. Focused REA analysis of its directory returned parent Evidence `ev_b6b3716088eccd687d808507ce2647cf0c420619852c1a482797f3ac0e943d14` and summary projection `ev_bf36da08201a84e696b3a17a1c6a729210a1612b9958a3e3f7cdacb7e2b16771`; its worker exhausted heap while parsing `host-main.cjs`, so these do not independently validate the source excerpts.

## Analysis limitations

REA analyzed the 42,107,632 text bytes in the ASAR as inert text, with 596 parsed JavaScript files, 17 modules, 5,506 findings, zero parse failures, and partial application/semantic graph coverage. The parent analysis reports 1,082 application unknowns and 19,588 semantic unknowns. Six unpacked native members had integrity contradictions and are untrusted. Bundle bootstrap code was not executed. The REA trace seed had zero graph matches and explicitly reports partial source graph coverage. A second, focused REA analysis of the research Sand Host directory selected `host-main.cjs` and `package.json`, but its analyzer exhausted its heap on the 29 MB host bundle and parsed zero JS files; do not treat that result as validation of host-main conclusions.

## Local reconstruction status (2026-10-19)

TheGrok now has an independent, opt-in local objective follow-up flow. Users save an objective; periodic review is disabled by default. When enabled, the review sees at most 20 recent user-authored excerpts from the prior 30 days, capped to 6,000 characters, with no tools and no conversation history. The model must return an exact supporting quote; local validation rejects unsupported quotes and applies a simple token-overlap threshold. A supported suggestion waits for explicit approval. Approval starts a visible turn on the primary local agent. The UI can complete/resume objectives, dismiss proposals, cancel review, and inspect persisted states. Events/settings/objectives persist, while active model runs do not; startup marks orphaned investigations failed rather than resuming them.

These mechanics are implementation choices for a usable local substitute. The 30-day window, score, thresholds, timer, storage schema and approval workflow have **not** been recovered from Grok Bot. This implementation does not contain an isolated subagent, remote due-set, original `WakeParent`, or original dispatcher. The exact original algorithm remains unknown.
