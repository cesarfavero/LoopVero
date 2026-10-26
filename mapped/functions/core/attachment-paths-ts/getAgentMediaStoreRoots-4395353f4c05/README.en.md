# `getAgentMediaStoreRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/attachment-paths.ts` · [Module README](../../../../modules/core/attachment-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530340-530342](../../../../../reference/runtime/sand-eval-runner.cjs#L530340-L530342) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530340-530342](../../../../../reference/runtime/sand-eval-runner.cjs#L530340-L530342) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:530340

Calls written directly in this body: `getAgentAssetsDir`, `getAgentAttachmentsDir`.

SHA-256 of the source span: `305dc411f630887ce38880ec2f894cc5379ecb55bfbcb1b928e4b4cd0b97514f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
