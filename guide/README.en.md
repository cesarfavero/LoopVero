# LoopVero · Complete harness guide

[English](README.en.md) · [Português (Brasil)](README.md)

This guide explains the harness from the original files: how a request enters, where it is routed, how the runner assembles context and tools, how execution progresses, and how its effects reach the transcript, memory, and the parent agent of a delegation. That parent is not necessarily the primary bot configured by the user.

The study distinguishes host code, the evaluation runner, and remote contracts. This separation is essential: functions present in two bundles may have a complete implementation in one and only a declaration in the other.

## Reading path

1. [Architecture](architecture/README.en.md): overview and three execution paths.
2. [Findings](findings/README.en.md): findings that prevent incorrect interpretations.
3. [Proactivity](components/proactivity/README.en.md): how the result of quiet work reaches the parent, and where the origin of the decision remains unknown.
4. [Turns](components/turns/README.en.md), [inference](components/inference/README.en.md), [tools](components/tools/README.en.md): the central loop.
5. [Memory](components/memory/README.en.md), [subagents](components/subagents/README.en.md), [transcripts](components/transcripts/README.en.md): state and continuity.
6. [Catalog](../mapped/README.en.md): every module and named function, with links to the implementation.

## Components

| Component | What the README explains |
| --- | --- |
| [Bootstrap](components/bootstrap/README.en.md) | Process, lock, extensions, gateway discovery, shutdown |
| [Gateway](components/gateway/README.en.md) | HTTP, SSE, schemas, dispatch, temporal proxy, and BOX refusal |
| [Scheduling](components/scheduling/README.en.md) | User/agent/background queues, serialization per agent, and watchdog |
| [Turns](components/turns/README.en.md) | Composition, startup, checkpoints, completion, and differences between bundles |
| [Inference](components/inference/README.en.md) | Session factory, prompt executor, streaming, and model boundary |
| [Tools](components/tools/README.en.md) | Catalog construction, manifests by agent type, and execution |
| [Prompts](components/prompts/README.en.md) | Sections, identity, context, permissions, and freezing |
| [Proactivity](components/proactivity/README.en.md) | Opportunities, automation, quiet work, and communication with the parent |
| [Automations](components/automations/README.en.md) | Definition, schedule, IDs, synchronization, and execution |
| [Background wakes](components/background-wakes/README.en.md) | WakeParent, revival, delivery, and retired paths |
| [Primary bot](components/primary-bot/README.en.md) | Selection of the primary agent and the limits of that responsibility |
| [Subagents](components/subagents/README.en.md) | Types, inheritance, exclusions, execution, and results |
| [Memory](components/memory/README.en.md) | Scopes, formats, search, writes, post-turn extraction, and Dream |
| [Context compaction](components/context-compaction/README.en.md) | Summarization, thresholds, idle compaction, and continuity |
| [Transcripts](components/transcripts/README.en.md) | Writing, reading, publishing, remote watching, and indexing |
| [Tasks](components/tasks/README.en.md) | Task document, its own transcript, and the distinction from delegations |
| [Skills](components/skills/README.en.md) | Discovery, normalization, content, and visible versions |
| [Approvals](components/approvals/README.en.md) | Review, policies, expiration, and external effects |
| [Browser and computer](components/browser-computer/README.en.md) | Computer execution, browser tools, and boundaries |
| [Integrations](components/integrations/README.en.md) | MCP, discovery, authentication, and external calls |
| [Isolation](components/isolation/README.en.md) | Workers, storage, capacity, and isolation limits |
| [Cancellation and recovery](components/cancellation-recovery/README.en.md) | Abort, generation changes, pausing, and recovery |
| [Budgets and recovery](components/budgets-recovery/README.en.md) | Step limits, deadlines, timeouts, and consecutive failures |
| [Observability](components/observability/README.en.md) | Telemetry, correlation, diagnostics, and performance signals |
| [Group messaging](components/group-messaging/README.en.md) | Group conversations, orchestration, and delivery |

## Individual functions

[Manually explained core functions](functions/README.en.md) examines the most important contracts in depth. The [generated catalog](../mapped/README.en.md) provides a README page for each of the 14,935 selected qualified names, including helper functions and internal methods.

Each page preserves occurrences by bundle. AST counts and call lists are syntactic facts, not guarantees that the code was executed or that a dynamic call resolves to a particular implementation.

## How to assess a claim

| Level | Meaning |
| --- | --- |
| Static implementation | Function body, conditions, and calls present in the file |
| Recovered contract | Identified schema, compiled interface, message, or RPC |
| Bounded inference | Interpretation derived from the connections and explicitly identified as such |
| Unavailable boundary | Remote implementation or configuration that was not provided |
| Observed execution | Requires a runtime and evidence of the result; this study did not perform it |

[Method and limitations](methodology/README.en.md) · [Coverage](coverage/README.en.md) · [References](../reference/README.en.md)
