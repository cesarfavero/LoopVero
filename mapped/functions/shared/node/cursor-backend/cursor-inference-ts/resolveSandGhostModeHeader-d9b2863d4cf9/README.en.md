# `resolveSandGhostModeHeader`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224984-224988](../../../../../../../reference/runtime/host-main.cjs#L224984-L224988) | `FunctionDeclaration` | yes | `options2, fetchPrivacyMode = fetchSandPrivacyMode` |
| [evaluation:512047-512051](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512047-L512051) | `FunctionDeclaration` | yes | `options2, fetchPrivacyMode = fetchSandPrivacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224984-224988](../../../../../../../reference/runtime/host-main.cjs#L224984-L224988) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:512047-512051](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512047-L512051) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:224984

Calls written directly in this body: `getSandGhostModeHeaderFromPrivacyMode`, `resolveSandPrivacyMode`.

SHA-256 of the source span: `3dfb257f27c874ef5c86e5f66239371e8956792ac533141f80cdc6ae865c6d9b`.

### evaluation:512047

Calls written directly in this body: `getSandGhostModeHeaderFromPrivacyMode`, `resolveSandPrivacyMode`.

SHA-256 of the source span: `3dfb257f27c874ef5c86e5f66239371e8956792ac533141f80cdc6ae865c6d9b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
