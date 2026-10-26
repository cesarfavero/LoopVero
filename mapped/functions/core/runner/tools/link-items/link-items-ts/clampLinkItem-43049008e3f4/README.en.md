# `clampLinkItem`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741076-741084](../../../../../../../../reference/runtime/host-main.cjs#L741076-L741084) | `FunctionDeclaration` | no | `item` |
| [evaluation:482023-482031](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482023-L482031) | `FunctionDeclaration` | no | `item` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741076-741084](../../../../../../../../reference/runtime/host-main.cjs#L741076-L741084) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482023-482031](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482023-L482031) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:741076

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `8a790cc29e105fed978ab6057360652ec257babcea2f619421e9eeee940d8146`.

### evaluation:482023

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `8a790cc29e105fed978ab6057360652ec257babcea2f619421e9eeee940d8146`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
