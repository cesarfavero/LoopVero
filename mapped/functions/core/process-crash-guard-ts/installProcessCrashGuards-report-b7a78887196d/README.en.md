# `installProcessCrashGuards/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/process-crash-guard.ts` · [Module README](../../../../modules/core/process-crash-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430976-430976](../../../../../reference/runtime/host-main.cjs#L430976-L430976) | `ArrowFunctionExpression` | no | `kind, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430976-430976](../../../../../reference/runtime/host-main.cjs#L430976-L430976) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:430976 uses an implicit arrow-function return.

### host:430976

Calls written directly in this body: `handleProcessCrash`.

SHA-256 of the source span: `5213e5528ae55e315fb060d8ee5a42ea83ff937bd10e2ce945756882b3de6017`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
