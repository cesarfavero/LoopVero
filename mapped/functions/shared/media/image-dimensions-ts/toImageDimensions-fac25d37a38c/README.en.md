# `toImageDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/image-dimensions.ts` · [Module README](../../../../../modules/shared/media/image-dimensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497273-497277](../../../../../../reference/runtime/host-main.cjs#L497273-L497277) | `FunctionDeclaration` | no | `{ width, height }` |
| [evaluation:514971-514975](../../../../../../reference/runtime/sand-eval-runner.cjs#L514971-L514975) | `FunctionDeclaration` | no | `{ width, height }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497273-497277](../../../../../../reference/runtime/host-main.cjs#L497273-L497277) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:514971-514975](../../../../../../reference/runtime/sand-eval-runner.cjs#L514971-L514975) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497273

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `5e716b908220900a843f12819eb12f12d095e32e4e6ca7bea8047d2599cf4fc6`.

### evaluation:514971

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `5e716b908220900a843f12819eb12f12d095e32e4e6ca7bea8047d2599cf4fc6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
