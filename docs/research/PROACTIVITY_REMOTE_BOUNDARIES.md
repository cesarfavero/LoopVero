# Platform proactivity remote boundaries

## What the local artifacts reveal

The research-tree `host-main.cjs` contains generated `GrokBotService` protocol declarations and harness prompt/tool code. One service comment explicitly separates changelog campaign administration from enrolling users, arming a proactivity due set, and dispatching wakes (`host-main.cjs:215113-215124`). Another local constant describes the proactive worker's quiet behavior and parent handoff (`host-main.cjs:733924-733930`). These are literal source observations. Together, they support a remote scheduling/eligibility boundary plus a local constrained worker/parent boundary, but do not demonstrate the boundary executing.

## What remains outside this artifact

No backend source or retained network/runtime trace was present in the scope examined. The local comment is a negative boundary statement, not an implementation of the due set. It does not expose:

- how users become enrolled or unenrolled;
- what signals or events create due work;
- due-time calculation, ranking, relevance or confidence policy;
- limits, cooldowns, deduplication, retries, cancellation, or feedback;
- RPC name/payload that dispatches a platform proactive run;
- whether generation is model-based, rules-based, or hybrid;
- the runtime path that constructs the readonly subagent or routes `WakeParent` to the parent;
- UI delivery behavior after the parent receives a wake.

The extracted source includes comments/schema for internal changelog RPCs with `notify_proactively`, eligibility gates and delivery windows, but those fields describe changelog campaign data. The nearby explicit comment says campaign CRUD does not enroll users or trigger the due set. Do not treat `notify_proactively` as the underlying proactive algorithm.

## Reconstruction boundary

An independent implementation may reproduce the **observed local contract**: isolated quiet worker, restricted tool surface, explicit `WakeParent` handoff, parent-owned user communication. Any locally implemented signal collector, opportunity generator, score, policy, enrollment store or scheduler is a new design unless corroborated by backend evidence or runtime captures. Label it as an equivalent alternative and keep its decisions inspectable; do not attribute the algorithm to Grok Bot.

## Confidence

- **High:** static strings and generated service comments at the cited source locations.
- **Medium:** remote ownership of enrollment/due scheduling inferred from the separation statement; exact ownership remains unproven.
- **Low/unknown:** all algorithmic details and end-to-end runtime behavior.

## Artifact integrity and analysis boundaries

The app ASAR SHA-256 is `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`. REA retained analysis Evidence `ev_1981b380e5d525877426762c8b140f26468c2115708016bb391d4fd68249d2e1`; its graph and semantic coverage are partial and include extensive unresolved items. Its literal trace `ev_7f7a6731a599ea8eda1ff6a0ee3b9f96275b3db6fb632e6854d5f1a82f92091e` did not match a graph entity for `proactivity`; REA explicitly warns that this does not establish absence. Six unpacked native artifacts had ASAR integrity contradictions and were marked untrusted. The extracted Sand Host file is a separate path and digest (`d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946`); it has not been proven to match the app's packaged files byte-for-byte. Focused REA analysis of that source directory returned `ev_b6b3716088eccd687d808507ce2647cf0c420619852c1a482797f3ac0e943d14` but exhausted heap while parsing `host-main.cjs`, leaving the source statements unvalidated by REA.
