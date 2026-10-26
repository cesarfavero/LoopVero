# `shellSingleQuote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/box-file-transfer.ts` · [Module README](../../../../../modules/host/box/box-file-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:591019-591021](../../../../../../reference/runtime/host-main.cjs#L591019-L591021) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:591019-591021](../../../../../../reference/runtime/host-main.cjs#L591019-L591021) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:591019

Calls written directly in this body: `value.replaceAll`.

SHA-256 of the source span: `c6d96b32e8132dfe6dba7aa637f88cf9f1f8b841d5593ca077e5e1abb2ec8ea5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
