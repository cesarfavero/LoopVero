# `toError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/process-crash-guard.ts` · [Module README](../../../../modules/core/process-crash-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430959-430961](../../../../../reference/runtime/host-main.cjs#L430959-L430961) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430959-430961](../../../../../reference/runtime/host-main.cjs#L430959-L430961) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:430959

Calls written directly in this body: `String`, `new Error`.

SHA-256 of the source span: `75b176df7887e401e0855618775ed89cbfde5002b4cb4d2c18c3061015a60603`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
