# `_Mp4Dimensions.indexOfTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/video-dimensions.ts` · [Module README](../../../../../modules/shared/media/video-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497692-497703](../../../../../../reference/runtime/host-main.cjs#L497692-L497703) | `method` | no | `view, tag, from2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497692-497703](../../../../../../reference/runtime/host-main.cjs#L497692-L497703) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:497692

Calls written directly in this body: `Math.max`, `tag.charCodeAt`, `view.getUint8`.

Assignment or increment targets: `at3`.

SHA-256 of the source span: `5ba2fd7cac833f9967b91ac71d8772a5a629538e158a3a2e19645b02ea125f17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
