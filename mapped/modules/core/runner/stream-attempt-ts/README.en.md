# `core/runner/stream-attempt.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../../guide/components/turns/README.en.md) · [General index](../../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:782354-782356](../../../../../reference/runtime/host-main.cjs#L782354-L782356) |
| evaluation | [evaluation:589851-589853](../../../../../reference/runtime/sand-eval-runner.cjs#L589851-L589853) |
| evaluation | [evaluation:590155-590413](../../../../../reference/runtime/sand-eval-runner.cjs#L590155-L590413) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `classifyStreamActivity` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/classifyStreamActivity-18e2faa75e37/README.en.md) |
| `createStreamAttempt` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-dd8d95151a74/README.en.md) |
| `createStreamAttempt/run` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-run-bd547ecf863d/README.en.md) |
| `createStreamAttempt/runBoundedTurn` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runBoundedTurn-b9b119205f08/README.en.md) |
| `createStreamAttempt/runBoundedTurn/isRetryable` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runBoundedTurn-isRetryable-5c532af8d6ce/README.en.md) |
| `createStreamAttempt/runBoundedTurn/onRetry` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runBoundedTurn-onRetry-8b8916fdf899/README.en.md) |
| `createStreamAttempt/runStreamOnce` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-5759be857bb4/README.en.md) |
| `createStreamAttempt/runStreamOnce/<callback>/disarm` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-callback-disarm-a3b582711574/README.en.md) |
| `createStreamAttempt/runStreamOnce/<callback>/noteStreamActivity` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-callback-noteStreamActivity-1f9d7c815150/README.en.md) |
| `createStreamAttempt/runStreamOnce/<callback>/onDeadline` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-callback-onDeadline-5819008862d8/README.en.md) |
| `createStreamAttempt/runStreamOnce/<callback>/reset` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-callback-reset-7200f73f7de4/README.en.md) |
| `createStreamAttempt/runStreamOnce/drainCheckpoints` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-drainCheckpoints-c72428bf48f5/README.en.md) |
| `createStreamAttempt/runStreamOnce/isCurrentAttempt` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-isCurrentAttempt-b3f9e84b02be/README.en.md) |
| `createStreamAttempt/runStreamOnce/persistCheckpoint` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-persistCheckpoint-bca01d8ee8d1/README.en.md) |
| `createStreamAttempt/runStreamOnce/settleAttempt` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamAttempt-runStreamOnce-settleAttempt-b36ce57de23f/README.en.md) |
| `createStreamWatchdog` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-fa9ef2febc2c/README.en.md) |
| `createStreamWatchdog/clearDeadlineHooksIf` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-clearDeadlineHooksIf-b54b83086a16/README.en.md) |
| `createStreamWatchdog/getStreamOutputProduced` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-getStreamOutputProduced-78805373b79e/README.en.md) |
| `createStreamWatchdog/noteUpdate` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-noteUpdate-4d4ac4cd3c1c/README.en.md) |
| `createStreamWatchdog/resetDeadline` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-resetDeadline-2c2eeb5d36a4/README.en.md) |
| `createStreamWatchdog/setDeadlineHooks` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-setDeadlineHooks-9149d70ba9d5/README.en.md) |
| `createStreamWatchdog/setStreamOutputProduced` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/createStreamWatchdog-setStreamOutputProduced-df64d66b8d8b/README.en.md) |
| `firstRejected` | 1 | [Static behavior](../../../../functions/core/runner/stream-attempt-ts/firstRejected-e5934bffde34/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
