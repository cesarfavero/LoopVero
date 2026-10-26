# `sanitizeExtendedUsage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529456-529468](../../../../../../reference/runtime/sand-eval-runner.cjs#L529456-L529468) | `FunctionDeclaration` | no | `usage, modelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529456-529468](../../../../../../reference/runtime/sand-eval-runner.cjs#L529456-L529468) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529456

Calls written directly in this body: `contextWindowByModelForHostLifetime.set`, `toSafeTokenCount2`.

SHA-256 of the source span: `dbfa3de73cce661bf199ff3d46cd294b8542b8f59db7556f7ecec551bc3731d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
