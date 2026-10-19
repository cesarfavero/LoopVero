# Platform proactivity evidence ledger

| ID | Evidence / location | Observation | Confidence | Limit |
|---|---|---|---|---|
| E1 | `GrokBotResearch/sand/sand-host/host-main.cjs:215113-215124` | Generated `GrokBotService` method comments state internal changelog campaign writes do not enroll users, arm the proactivity due set, or dispatch wakes. | High for exact comment in supplied source; medium as architecture description | Does not identify service that owns the due set or actual scheduler. Research tree not verified byte-identical to packaged ASAR member. |
| E2 | `GrokBotResearch/sand/sand-host/host-main.cjs:733924-733930` | `PLATFORM_PROACTIVITY_SUBAGENT_CLOSING` says stay quiet, cannot write main chat, `WakeParent` is the only route to start parent, normal final answer remains private, and wake ends run. | High for static prompt text | Prompt constants do not prove a run executed or reveal dispatch criteria. |
| E3 | `GrokBotResearch/sand/sand-host/host-main.cjs:782076-782078` | Counter `grok_bot.readonly_subagent.tool_refused` counts calls from readonly proactivity subagent to omitted tools, labeled by tool name. | High for metric declaration | No metric samples; does not enumerate permitted tools or show enforcement path. |
| E4 | REA application analysis `ev_1981b380e5d525877426762c8b140f26468c2115708016bb391d4fd68249d2e1` | ASAR `055b087a...0e860`, 612 relevant files, 596 parsed JS, 17 modules, partial graph, partial semantic graph. | High for analyzer-reported artifact facts | Static only; graph has incomplete coverage and substantial unknowns. |
| E5 | REA summary projection `ev_138c8e515067dd080302609fc484da40c4aa9061377e200f3a2e0e49f3713e2a` | Reports parent Evidence E4, 1,082 application unknowns, 19,588 semantic unknowns, 1,099 limitations; six unpacked native file integrity contradictions. | High for projection contents | Summary truncates additional limitation detail; parent record remains canonical. |
| E6 | REA trace `ev_7f7a6731a599ea8eda1ff6a0ee3b9f96275b3db6fb632e6854d5f1a82f92091e` | Literal string seed `proactivity` produced zero graph seed matches; trace says source graph is partial and unmatched seeds/frontiers remain unknown. | High for trace outcome | A zero match is explicitly not evidence that feature is absent. |
| E7 | Extracted package manifest `/Users/cesarfavero/GrokBotResearch/extracted/package.json` | Product name Grok Bot, version `0.71.2`, Electron main at `dist/electron-main/main.cjs`. | High for manifest fields | Manifest came from external extracted tree and its identity has not been cryptographically matched to app.asar in this pass. |
| E8 | REA focused analysis parent `ev_b6b3716088eccd687d808507ce2647cf0c420619852c1a482797f3ac0e943d14`; summary projection `ev_bf36da08201a84e696b3a17a1c6a729210a1612b9958a3e3f7cdacb7e2b16771` | Directory identity SHA-256 `dcae6b963adf1ad00bd14dd8d6dddbffe4819ddae6af0df4445bc86e13e50512`; caller-selected `host-main.cjs` analysis stopped when worker exhausted heap, with zero JS files parsed and partial graph coverage. | High for analyzer status | Does not validate E1-E3 source locations; REA did not successfully parse the large host bundle. |

## REA tool discovery and use

REA MCP was available in this session. Actual tool inventory included `analyze_javascript_application`, `inspect_analysis_view`, `trace_application_feature`, `trace_javascript_semantics`, `inspect_artifact`, and related tools. The ASAR analyzer first rejected an unpacked-member integrity mismatch; the analysis was rerun with `integrity_policy: record-and-continue`, preserving contradictory observed bytes as untrusted. A second focused pass on the research Sand Host source exhausted the analyzer worker heap. No original artifact was edited or executed. E1-E3 are literal source observations by file/line, not REA-validated control-flow findings.

## Pending evidence needed for algorithm recovery

1. Exact generated RPC/client declaration and request/response fields for platform proactivity enrollment, due events, and wake dispatch.
2. Backend implementation or API documentation for event selection, eligibility, scoring, suppression, dedupe, retry, and feedback.
3. REA module pages or focused semantic trace for the actual ASAR source paths that instantiate the worker and receive `WakeParent`.
4. Controlled runtime observation to correlate a trigger with dispatch, subagent tool availability, handoff payload, and parent/UI delivery.
