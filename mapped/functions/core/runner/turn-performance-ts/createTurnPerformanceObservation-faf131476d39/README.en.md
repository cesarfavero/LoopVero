# `createTurnPerformanceObservation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547266-548011](../../../../../../reference/runtime/sand-eval-runner.cjs#L547266-L548011) | `FunctionDeclaration` | no | `{   ctx,   harness,   sessionKind = "main",   turnKind = "other",   wake = "none",   templateMemoriesSetup = false,   templateSetupDeferExploration = false,   initiator,   startedAt,   activityStartedAt,   runRole = "other",   prewarm = false,   prewarmRace,   composeTiming,   prewarmGate,   prewarmTrigger,   prewarmArm,   clientPlatform = "unknown",   userTurn = "other",   previousAssistantResponseAt,   userMessageSentAt,   turnStartedAt,   traceMarks,   requestSource,   onFirstRequestStart,   clock = realClock }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547266-548011](../../../../../../reference/runtime/sand-eval-runner.cjs#L547266-L548011) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547266

Calls written directly in this body: `String`, `classifyTurnSource`, `new Map`.

SHA-256 of the source span: `52889d571762dae63f07ebc340a13011769b3616bfa591a87d465f77c8c00d5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
