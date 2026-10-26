# `installedServerGuide`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585689-585693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585689-L585693) | `FunctionDeclaration` | no | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585689-585693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585689-L585693) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585689

Calls written directly in this body: `deps.resolveServerHost`, `deps.resolveServerId`, `guideForHost`, `providerOf2`.

SHA-256 of the source span: `8fb149010931b486bac416457f0b1ee4219b3da3d5811458ca349f3ee4ed6037`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
