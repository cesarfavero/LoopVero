# `indexOfFourCharTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497292-497303](../../../../../../reference/runtime/host-main.cjs#L497292-L497303) | `FunctionDeclaration` | no | `view, tag` |
| [evaluation:514990-515001](../../../../../../reference/runtime/sand-eval-runner.cjs#L514990-L515001) | `FunctionDeclaration` | no | `view, tag` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497292-497303](../../../../../../reference/runtime/host-main.cjs#L497292-L497303) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:514990-515001](../../../../../../reference/runtime/sand-eval-runner.cjs#L514990-L515001) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:497292

Calls written directly in this body: `tag.charCodeAt`, `view.getUint8`.

Assignment or increment targets: `at3`.

SHA-256 of the source span: `2c8791e3e230a8be1be4e4685f975fdd7309587f762e73d4d1cfcd696a6872dd`.

### evaluation:514990

Calls written directly in this body: `tag.charCodeAt`, `view.getUint8`.

Assignment or increment targets: `at3`.

SHA-256 of the source span: `2c8791e3e230a8be1be4e4685f975fdd7309587f762e73d4d1cfcd696a6872dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
