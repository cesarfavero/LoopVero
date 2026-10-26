# Verified findings

[English](README.en.md) · [Português (Brasil)](README.md)

| Finding | Evidence | Consequence for interpretation |
| --- | --- | --- |
| The BOX send entry point refuses substantive turns | An empty prompt without attachments is a no-op; everything else reaches the BOX refusal | Do not depict this entry point as an active local loop |
| Temporal agents go through the remote proxy | Gateway wrapper and selection by `agent.harness` | The backend and host are separate boundaries |
| The evaluation runner contains the complete available loop | Connected factory, runner, shell, session, and stream | Study this implementation without attributing its configuration to production |
| WakeParent ends an executor mediated by the parent and returns a handoff request | A single-shot message and the `automationParentWake` result | Resumption requires a host handler; the mechanism neither reveals initial selection nor proves delivery to the user |
| The automation synchronization timer is not an opportunity detector | Reconciliation of pending remote deletions | Do not call administrative polling proactivity |
| `resumePendingWakes` is empty in the recovered host path | Literal returns and a retired BOX path | Do not claim operational recovery merely because the name exists |
| Automation mediated by the parent is not universally readonly | Executor dispatch uses `readonly:false` | Read policies and tools by type and context |
| Dream has a type and a tool manifest | Transcript and memory tools, without connectors | This does not prove an active nightly scheduler |
| RecallMemory has a lexical path | Word overlap and a literal fallback | Do not assume embeddings or vector search |
| The scheduler watchdog does not automatically kill the task | The callback and escape allow a zombie task | Distinguish a diagnostic timeout from actual cancellation |
| Worker-pool capacity is not a hard ceiling in every state | With no eviction candidate, ensure may create a worker thread | Do not promise a strict thread limit based only on `maxWorkers` |

Sources and explanations: [turns](../components/turns/README.en.md), [gateway](../components/gateway/README.en.md), [inference](../components/inference/README.en.md), [proactivity](../components/proactivity/README.en.md), [automations](../components/automations/README.en.md), [wakes](../components/background-wakes/README.en.md), [memory](../components/memory/README.en.md), [scheduling](../components/scheduling/README.en.md), [isolation](../components/isolation/README.en.md).

## Boundaries that remain open

| Boundary | What was identified | What is missing before complete behavior can be claimed |
| --- | --- | --- |
| Spontaneous opportunity selection | Markers, types, and execution/delivery mechanisms | Initial algorithm, candidates, ranking, filters, frequency, and active configuration |
| Temporal backend | RPCs, actions, watch, and generated contracts | Service/workflow implementation and deployment |
| Production and evaluation | Concrete runner and factory in the evaluation artifact | Evidence that the configuration is equivalent to production |
| Dream | Type, manifest, prompts, and ports | Orchestrator/scheduler, transcript population, and active policy |
| Tool availability | Manifests, gates, and composition | Gate values and permissions in a real session |
| Recovery after a real failure | Classes, transitions, and static handling | Controlled execution with real storage and services |

These gaps have not been filled with an imagined reconstruction. Each identifies what would still require evidence for a production operations guide.
