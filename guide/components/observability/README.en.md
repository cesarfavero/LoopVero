# Observability

[English](README.en.md) · [Português (Brasil)](README.md)

The harness has separate observers for inference timing, visible messages, tools, token usage, and host diagnostics. The existence of metrics identifies instrumented points; it does not supply benchmark results or demonstrate that every event is enabled in an installation.

## Turn performance observation

`createTurnPerformanceObservation` receives context, harness, session and turn type, origin, initiator, timestamps, and a clock. It tracks the first request, first meaningful content, first acknowledgement, first tool, first subagent, retries, and gaps. Buffers wait for model identification before emitting certain metrics. [Implementation](../../../reference/runtime/sand-eval-runner.cjs#L547266-L548011).

| Moment | What is distinguished |
| --- | --- |
| Request started | Preparation and the start of inference |
| Meaningful content | Time to model response, distinct from a sent message |
| `firstAck` | First communication acknowledged by the observer |
| `messageDispatch` | Last send and the step/tool counts at that moment |
| Retry | Attempts and delay before the first token |
| `complete` | Duration, outcome, steps, and tools after the last message |

`firstAck` records only the first call to the callback and requires active observation and a defined harness. This record uses the local time at which the callback is called, stored as `dispatchedAt`; it is not a read receipt or confirmation of transport delivery to the user. For a temporal harness, it can correlate the user's send, activity start, and first message if the corresponding timestamps exist. `complete` disables observation and emits pending metrics; it does not create missing data. [Final section](../../../reference/runtime/sand-eval-runner.cjs#L547853-L548011).

This explains why time to token, time to message, and total duration should not be added together or treated as the same measurement. Timeout limits also cannot be converted into observed latency.

## MCP tools

`createTurnObservation` creates a 15-minute stall diagnostic policy unless overridden. `beginMcpExecObservation` records the toolCallId, request, route, and transport, arms the diagnostic, and returns a single-use settlement callback. Settlement cancels the timer, calculates duration, and emits the outcome. [Source](../../../reference/runtime/sand-eval-runner.cjs#L588565-L588695).

The `stalled` diagnostic does not cancel the tool in this function body. The route/transport can resolve to `unknown` on failure, and final emission waits for those resolutions. A tool error, refusal before dispatch, cancellation, and infrastructure error are distinct events. `observeMcpCallSettled` also records refusals that never reached the executor. [Refusal](../../../reference/runtime/sand-eval-runner.cjs#L588678-L588709).

## Token accounting

`turnUsageFromTurnEnded` returns `undefined` when all usage fields are absent. Otherwise, it normalizes missing fields to zero and preserves the absence of reasoning usage when it was not reported. The conversion helper clamps values between zero and `Number.MAX_SAFE_INTEGER`. `mergeTurnUsage` adds with saturation and keeps reasoning optional. [Code](../../../reference/runtime/sand-eval-runner.cjs#L525201-L525235).

Missing usage does not mean zero consumption. Adding message events without understanding their granularity can also double-count usage; the arithmetic helper does not deduplicate request IDs.

## Host diagnostics

`pinHostDiagnosticsReporter` installs a process reporter. `reportHostDiagnostic` calls the reporter only when present; `reportHostDiagnosticOrStderr` falls back to stderr and handles failure of the reporter itself. Fields are converted into a diagnostic line while preserving the event type. [Source](../../../reference/runtime/host-main.cjs#L430740-L430770).

Log-event text fields have declared rules and limits, such as 2,048 characters for log text and 4,096 for an error stack in specific categories. This is a field-selection/formatting contract; it should not be described as comprehensive proof of anonymization. [Fields](../../../reference/runtime/host-main.cjs#L450895-L450941).

## Use in analysis

Correlate agent, turn, request, toolCallId, and summary lifecycle without replacing one identity with another. Use outcome to distinguish success, blocking, cancellation, and error. Consult [scheduling](../scheduling/README.en.md), [cancellation](../cancellation-recovery/README.en.md), and [context](../context-compaction/README.en.md) before interpreting a watchdog or compaction event as completion of the work.
