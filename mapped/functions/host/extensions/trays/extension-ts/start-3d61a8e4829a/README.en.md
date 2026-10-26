# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/extension.ts` · [Module README](../../../../../../modules/host/extensions/trays/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784566-784578](../../../../../../../reference/runtime/host-main.cjs#L784566-L784578) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784566-784578](../../../../../../../reference/runtime/host-main.cjs#L784566-L784578) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784566

Calls written directly in this body: `new TrayManager`.

SHA-256 of the source span: `05c297b631cb817dcb4e24418283e1c59338f9c202d6bb455d57e528f43667ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
