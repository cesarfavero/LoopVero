# `start/dismiss`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/extension.ts` · [Module README](../../../../../../modules/host/extensions/trays/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784570-784572](../../../../../../../reference/runtime/host-main.cjs#L784570-L784572) | `ArrowFunctionExpression` | no | `{ id }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784570-784572](../../../../../../../reference/runtime/host-main.cjs#L784570-L784572) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:784570

Calls written directly in this body: `trays.dismiss`.

SHA-256 of the source span: `b8d01ea9beaaa4669c6f1c98252d6227454ef3c1f239637d0195f63322efb522`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
