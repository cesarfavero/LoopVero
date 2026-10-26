# `placesSearchToolsFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769256-769268](../../../../../../../../reference/runtime/host-main.cjs#L769256-L769268) | `FunctionDeclaration` | no | `host, renderCards` |
| [evaluation:564903-564915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564903-L564915) | `FunctionDeclaration` | no | `host, renderCards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769256-769268](../../../../../../../../reference/runtime/host-main.cjs#L769256-L769268) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564903-564915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564903-L564915) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:769256

Calls written directly in this body: `createPlacesSearchTool`, `host.gates.placesCard`, `host.gates.webSearchDisabled`.

SHA-256 of the source span: `dc97e858290307cff7ad9aa27479b5755b842e7ea6a5af1e51f201203094370a`.

### evaluation:564903

Calls written directly in this body: `createPlacesSearchTool`, `host.gates.placesCard`, `host.gates.webSearchDisabled`.

SHA-256 of the source span: `dc97e858290307cff7ad9aa27479b5755b842e7ea6a5af1e51f201203094370a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
