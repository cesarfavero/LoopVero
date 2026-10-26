# `_HeicDimensions.boxes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497330-497352](../../../../../../reference/runtime/host-main.cjs#L497330-L497352) | `method` | no | `view, { start, end }` |
| [evaluation:515028-515050](../../../../../../reference/runtime/sand-eval-runner.cjs#L515028-L515050) | `method` | no | `view, { start, end }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497330-497352](../../../../../../reference/runtime/host-main.cjs#L497330-L497352) | 4 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:515028-515050](../../../../../../reference/runtime/sand-eval-runner.cjs#L515028-L515050) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:497330

Calls written directly in this body: `boxes.push`, `fourCharTag`, `view.getUint32`.

Assignment or increment targets: `header`, `offset2`, `size`.

SHA-256 of the source span: `d0a265f02f4716d01f007f69d47ad2c88a0eea08b1fd7a84feaf1ca6a689a882`.

### evaluation:515028

Calls written directly in this body: `boxes.push`, `fourCharTag`, `view.getUint32`.

Assignment or increment targets: `header`, `offset2`, `size`.

SHA-256 of the source span: `d0a265f02f4716d01f007f69d47ad2c88a0eea08b1fd7a84feaf1ca6a689a882`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
