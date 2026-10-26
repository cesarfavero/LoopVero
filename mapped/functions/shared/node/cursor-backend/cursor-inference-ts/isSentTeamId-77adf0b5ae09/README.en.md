# `isSentTeamId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224992-224994](../../../../../../../reference/runtime/host-main.cjs#L224992-L224994) | `FunctionDeclaration` | no | `teamId` |
| [evaluation:512055-512057](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512055-L512057) | `FunctionDeclaration` | no | `teamId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224992-224994](../../../../../../../reference/runtime/host-main.cjs#L224992-L224994) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512055-512057](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512055-L512057) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:224992

Calls written directly in this body: `Number.isSafeInteger`.

SHA-256 of the source span: `4f870562c2e720a92e0d4791bfd3d3b8c2106edd8abfdc0d379cd7a775a994ec`.

### evaluation:512055

Calls written directly in this body: `Number.isSafeInteger`.

SHA-256 of the source span: `4f870562c2e720a92e0d4791bfd3d3b8c2106edd8abfdc0d379cd7a775a994ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
