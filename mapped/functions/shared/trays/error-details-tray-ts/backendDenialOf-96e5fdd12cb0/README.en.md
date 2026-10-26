# `backendDenialOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/error-details-tray.ts` · [Module README](../../../../../modules/shared/trays/error-details-tray-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736489-736498](../../../../../../reference/runtime/host-main.cjs#L736489-L736498) | `FunctionDeclaration` | no | `rawTitle, rawDetail, actions2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736489-736498](../../../../../../reference/runtime/host-main.cjs#L736489-L736498) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:736489

Calls written directly in this body: `rawDetail.trim`, `rawTitle.trim`.

SHA-256 of the source span: `a18f2d4b1d9f48fc7f3a2cf8e9e45643146e1776444d54694662a9e1bb021d71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
