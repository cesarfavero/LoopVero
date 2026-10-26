# `SandRunScheduler.disarmWatchdog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739851-739856](../../../../../../../reference/runtime/host-main.cjs#L739851-L739856) | `method` | no | `queue` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739851-739856](../../../../../../../reference/runtime/host-main.cjs#L739851-L739856) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:739851

Calls written directly in this body: `queue.graceTimer.dispose`, `queue.watchdogTimer.dispose`.

Assignment or increment targets: `queue.graceTimer`, `queue.watchdogTimer`.

SHA-256 of the source span: `541b03e15cefe24b7d111a712a3fc74f24ce2d1a18d26e070d8c9893292073de`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
