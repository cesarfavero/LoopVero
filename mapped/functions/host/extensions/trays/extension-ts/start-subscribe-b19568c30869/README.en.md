# `start/subscribe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/extension.ts` · [Module README](../../../../../../modules/host/extensions/trays/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784574-784574](../../../../../../../reference/runtime/host-main.cjs#L784574-L784574) | `ArrowFunctionExpression` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784574-784574](../../../../../../../reference/runtime/host-main.cjs#L784574-L784574) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:784574 uses an implicit arrow-function return.

### host:784574

Calls written directly in this body: `trays.subscribe`.

SHA-256 of the source span: `783d91441adf69643caad4078e15d31f24f940dc797b481183d46a58236b3faf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
