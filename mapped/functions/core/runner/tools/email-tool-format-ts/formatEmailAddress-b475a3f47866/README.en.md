# `formatEmailAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-tool-format.ts` · [Module README](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764141-764144](../../../../../../../reference/runtime/host-main.cjs#L764141-L764144) | `FunctionDeclaration` | no | `address` |
| [evaluation:557512-557515](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557512-L557515) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764141-764144](../../../../../../../reference/runtime/host-main.cjs#L764141-L764144) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557512-557515](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557512-L557515) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764141

Calls written directly in this body: `address.name.trim`.

SHA-256 of the source span: `95ca0c87951bd23e49d2d1cf31ef12249d3ba188daa43eabeda5c7ee347beb45`.

### evaluation:557512

Calls written directly in this body: `address.name.trim`.

SHA-256 of the source span: `95ca0c87951bd23e49d2d1cf31ef12249d3ba188daa43eabeda5c7ee347beb45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
