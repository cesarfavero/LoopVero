# `verifyDraftAgainstRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755294-755331](../../../../../../../reference/runtime/host-main.cjs#L755294-L755331) | `FunctionDeclaration` | no | `draft, resolution` |
| [evaluation:541174-541211](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541174-L541211) | `FunctionDeclaration` | no | `draft, resolution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755294-755331](../../../../../../../reference/runtime/host-main.cjs#L755294-L755331) | 8 | 0 | 0 | 1 | 3 | 0 |
| [evaluation:541174-541211](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541174-L541211) | 8 | 0 | 0 | 1 | 3 | 0 |

### host:755294

Calls written directly in this body: `Math.ceil`, `canSendAs`, `isHostedGmailRoute`, `new DraftRefusedError`, `sendable.join`.

Explicit throw targets: `DraftRefusedError`.

SHA-256 of the source span: `1b7d0c4c8d2d2f9148a56a75c1dbd319f05fdeab084698bd1b1915b650db9f3f`.

### evaluation:541174

Calls written directly in this body: `Math.ceil`, `canSendAs`, `isHostedGmailRoute`, `new DraftRefusedError`, `sendable.join`.

Explicit throw targets: `DraftRefusedError`.

SHA-256 of the source span: `1b7d0c4c8d2d2f9148a56a75c1dbd319f05fdeab084698bd1b1915b650db9f3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
