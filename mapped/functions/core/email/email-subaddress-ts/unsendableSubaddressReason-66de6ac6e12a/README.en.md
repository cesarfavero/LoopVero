# `unsendableSubaddressReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-subaddress.ts` · [Module README](../../../../../modules/core/email/email-subaddress-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715962-715983](../../../../../../reference/runtime/host-main.cjs#L715962-L715983) | `FunctionDeclaration` | no | `address` |
| [evaluation:527631-527652](../../../../../../reference/runtime/sand-eval-runner.cjs#L527631-L527652) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715962-715983](../../../../../../reference/runtime/host-main.cjs#L715962-L715983) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:527631-527652](../../../../../../reference/runtime/sand-eval-runner.cjs#L527631-L527652) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:715962

Calls written directly in this body: `SENDABLE_TAG.test`, `address.indexOf`, `address.lastIndexOf`, `address.slice`, `hasBlockedWord`, `reservedTermIn`.

SHA-256 of the source span: `0630908b20141da9f90df61fcf5a91c17e424fecdef588980f4fb4fe26fce5fb`.

### evaluation:527631

Calls written directly in this body: `SENDABLE_TAG.test`, `address.indexOf`, `address.lastIndexOf`, `address.slice`, `hasBlockedWord`, `reservedTermIn`.

SHA-256 of the source span: `0630908b20141da9f90df61fcf5a91c17e424fecdef588980f4fb4fe26fce5fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
