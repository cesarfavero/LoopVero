# `deliveredText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/executor-fork.ts` · [Module README](../../../../../../modules/core/runner/subagents/executor-fork-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587559-587568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587559-L587568) | `FunctionDeclaration` | no | `toolName, rawArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587559-587568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587559-L587568) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587559

Calls written directly in this body: `isSandUserDeliveryToolName`, `resolveEffectiveToolCall`.

SHA-256 of the source span: `bbf45bc57c7d1a90516ebe5bc6132ca0f4d46d98ab918104a3ca5194c1a88dcb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
