# `hiddenClickReplyReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/wake-outcomes.ts` · [Module README](../../../../../modules/core/runner/wake-outcomes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725674-725679](../../../../../../reference/runtime/host-main.cjs#L725674-L725679) | `FunctionDeclaration` | no | `clicked` |
| [evaluation:538731-538736](../../../../../../reference/runtime/sand-eval-runner.cjs#L538731-L538736) | `FunctionDeclaration` | no | `clicked` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725674-725679](../../../../../../reference/runtime/host-main.cjs#L725674-L725679) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538731-538736](../../../../../../reference/runtime/sand-eval-runner.cjs#L538731-L538736) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725674

Calls written directly in this body: `systemReminder`.

SHA-256 of the source span: `491bb9e389d3587b047d5bb02307dfbe64d1758123eef038d015de33d94f6218`.

### evaluation:538731

Calls written directly in this body: `systemReminder`.

SHA-256 of the source span: `491bb9e389d3587b047d5bb02307dfbe64d1758123eef038d015de33d94f6218`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
