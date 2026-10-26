# `isBlobNotFoundErrorNode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-not-found-error.js` · [Module README](../../../../modules/agent-kv/blob-not-found-error-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616365-616370](../../../../../reference/runtime/host-main.cjs#L616365-L616370) | `FunctionDeclaration` | no | `error64` |
| [evaluation:284905-284910](../../../../../reference/runtime/sand-eval-runner.cjs#L284905-L284910) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616365-616370](../../../../../reference/runtime/host-main.cjs#L616365-L616370) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:284905-284910](../../../../../reference/runtime/sand-eval-runner.cjs#L284905-L284910) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:616365

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3df574747215db8c0eeb3d38f3021d7c352067a91d367a51ba1557d814a7787e`.

### evaluation:284905

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `488a5c51db6128d7295bfbbc19850aa052c0ae960cd690ae32b98d44656fb4c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
