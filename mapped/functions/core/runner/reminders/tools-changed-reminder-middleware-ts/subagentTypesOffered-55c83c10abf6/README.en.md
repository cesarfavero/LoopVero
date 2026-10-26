# `subagentTypesOffered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/reminders/tools-changed-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/tools-changed-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586948-586956](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586948-L586956) | `FunctionDeclaration` | no | `tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586948-586956](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586948-L586956) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:586948

Calls written directly in this body: `subagentTypeSchema.safeParse`.

SHA-256 of the source span: `df8f78b8fc0f22ce286b65a725205b0b3fa4a9b88be30304960555b03592547e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
