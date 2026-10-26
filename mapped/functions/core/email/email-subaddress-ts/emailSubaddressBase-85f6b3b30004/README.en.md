# `emailSubaddressBase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-subaddress.ts` · [Module README](../../../../../modules/core/email/email-subaddress-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715954-715961](../../../../../../reference/runtime/host-main.cjs#L715954-L715961) | `FunctionDeclaration` | no | `address` |
| [evaluation:527623-527630](../../../../../../reference/runtime/sand-eval-runner.cjs#L527623-L527630) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715954-715961](../../../../../../reference/runtime/host-main.cjs#L715954-L715961) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:527623-527630](../../../../../../reference/runtime/sand-eval-runner.cjs#L527623-L527630) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:715954

Calls written directly in this body: `address.indexOf`, `address.lastIndexOf`, `address.slice`.

SHA-256 of the source span: `87df69e31465ac51ebffb5dcc3489c176c058d3528dfaa0f9eccd313aca1fb0a`.

### evaluation:527623

Calls written directly in this body: `address.indexOf`, `address.lastIndexOf`, `address.slice`.

SHA-256 of the source span: `87df69e31465ac51ebffb5dcc3489c176c058d3528dfaa0f9eccd313aca1fb0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
