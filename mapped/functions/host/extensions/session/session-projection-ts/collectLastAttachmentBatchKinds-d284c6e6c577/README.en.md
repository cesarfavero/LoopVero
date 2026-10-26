# `collectLastAttachmentBatchKinds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-projection.ts` · [Module README](../../../../../../modules/host/extensions/session/session-projection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722398-722429](../../../../../../../reference/runtime/host-main.cjs#L722398-L722429) | `FunctionDeclaration` | no | `entries, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722398-722429](../../../../../../../reference/runtime/host-main.cjs#L722398-L722429) | 4 | 2 | 0 | 1 | 0 | 0 |

### host:722398

Calls written directly in this body: `classifyAttachment`, `isSameAttachmentBatch`, `isSessionPreviewLink`, `kinds.push`, `kinds.reverse`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `b275d203903cd806147ce58ec42d7c2226a69e05f1e488db8c77d502a1ddfd1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
