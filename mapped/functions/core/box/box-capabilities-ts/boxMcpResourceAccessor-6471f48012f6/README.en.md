# `boxMcpResourceAccessor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-capabilities.ts` · [Module README](../../../../../modules/core/box/box-capabilities-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546710-546715](../../../../../../reference/runtime/host-main.cjs#L546710-L546715) | `FunctionDeclaration` | yes | `box, ctx` |
| [evaluation:475805-475810](../../../../../../reference/runtime/sand-eval-runner.cjs#L475805-L475810) | `FunctionDeclaration` | yes | `box, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546710-546715](../../../../../../reference/runtime/host-main.cjs#L546710-L546715) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:475805-475810](../../../../../../reference/runtime/sand-eval-runner.cjs#L475805-L475810) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:546710

Calls written directly in this body: `box.mcpResourceAccessor`, `new BoxMcpUnsupportedError`.

Explicit throw targets: `BoxMcpUnsupportedError`.

SHA-256 of the source span: `bef8848befafc2d88adc324afde2973e256cebba59da3811eeee37e2bb4affee`.

### evaluation:475805

Calls written directly in this body: `box.mcpResourceAccessor`, `new BoxMcpUnsupportedError`.

Explicit throw targets: `BoxMcpUnsupportedError`.

SHA-256 of the source span: `bef8848befafc2d88adc324afde2973e256cebba59da3811eeee37e2bb4affee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
