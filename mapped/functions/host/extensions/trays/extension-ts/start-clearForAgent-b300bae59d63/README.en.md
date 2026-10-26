# `start/clearForAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/extension.ts` · [Module README](../../../../../../modules/host/extensions/trays/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784576-784576](../../../../../../../reference/runtime/host-main.cjs#L784576-L784576) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784576-784576](../../../../../../../reference/runtime/host-main.cjs#L784576-L784576) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:784576 uses an implicit arrow-function return.

### host:784576

Calls written directly in this body: `trays.clearForAgent`.

SHA-256 of the source span: `820afe1c0013e316f8f4ac869284c51311d5c305a251bcc2227f30fe12bc74ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
