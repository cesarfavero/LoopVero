# `getSandGhostModeHeaderFromPrivacyMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224925-224927](../../../../../../../reference/runtime/host-main.cjs#L224925-L224927) | `FunctionDeclaration` | no | `privacyMode` |
| [evaluation:511947-511949](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511947-L511949) | `FunctionDeclaration` | no | `privacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224925-224927](../../../../../../../reference/runtime/host-main.cjs#L224925-L224927) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511947-511949](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511947-L511949) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:224925

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `1876739d6efc56e986117f7b10895a6cc105d83b1f054502fd538890ed02998d`.

### evaluation:511947

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `bd8971b1ff6bda17a4e4a7de064357357ce34e54bd41fdb060b0f2ce4ec5bf16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
