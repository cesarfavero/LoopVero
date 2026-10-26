# `_HeicDimensions.primaryItemId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497359-497366](../../../../../../reference/runtime/host-main.cjs#L497359-L497366) | `method` | no | `view, pitm` |
| [evaluation:515057-515064](../../../../../../reference/runtime/sand-eval-runner.cjs#L515057-L515064) | `method` | no | `view, pitm` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497359-497366](../../../../../../reference/runtime/host-main.cjs#L497359-L497366) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:515057-515064](../../../../../../reference/runtime/sand-eval-runner.cjs#L515057-L515064) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:497359

Calls written directly in this body: `view.getUint16`, `view.getUint32`, `view.getUint8`.

SHA-256 of the source span: `46d10b35d6ef70ceebba1d0199636626e121d91218707de0d7fd0cc37654e1bd`.

### evaluation:515057

Calls written directly in this body: `view.getUint16`, `view.getUint32`, `view.getUint8`.

SHA-256 of the source span: `46d10b35d6ef70ceebba1d0199636626e121d91218707de0d7fd0cc37654e1bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
