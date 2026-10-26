# `refuseSandProfileUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-state.ts` · [Module README](../../../../../modules/core/runner/agent-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554676-554686](../../../../../../reference/runtime/sand-eval-runner.cjs#L554676-L554686) | `FunctionDeclaration` | no | `patch2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554676-554686](../../../../../../reference/runtime/sand-eval-runner.cjs#L554676-L554686) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:554676

Calls written directly in this body: `changedSandProfileFields`, `patch2.name.trim`, `stateWriteFailed`.

SHA-256 of the source span: `5220bca406bb784abc6b39e54b4ec516fab4aac87d99250422c734a14f16169a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
