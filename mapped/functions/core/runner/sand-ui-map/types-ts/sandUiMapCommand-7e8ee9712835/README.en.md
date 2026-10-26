# `sandUiMapCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/types.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557819-557823](../../../../../../../reference/runtime/host-main.cjs#L557819-L557823) | `FunctionDeclaration` | no | `map4, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557819-557823](../../../../../../../reference/runtime/host-main.cjs#L557819-L557823) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:557819

Calls written directly in this body: `map4.commands.find`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `6dfbfa3a5ea9d51092f36ad7e75041a68fe216d2f750f0cf17a0f35188130c56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
