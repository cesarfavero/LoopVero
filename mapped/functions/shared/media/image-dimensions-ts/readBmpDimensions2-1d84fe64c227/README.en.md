# `readBmpDimensions2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:515208-515220](../../../../../../reference/runtime/sand-eval-runner.cjs#L515208-L515220) | `FunctionDeclaration` | no | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515208-515220](../../../../../../reference/runtime/sand-eval-runner.cjs#L515208-L515220) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:515208

Calls written directly in this body: `Math.abs`, `String.fromCharCode`, `buffer.subarray`, `dataViewOf`, `toImageDimensions`, `view.getInt32`, `view.getUint16`, `view.getUint32`.

SHA-256 of the source span: `d998a0e25dabd72bc33e8db47babfdab8e6dd4acec2aa16e7672047e8fa3091d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
