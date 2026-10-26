# `parseCsnapsOperationResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541133-541152](../../../../../../../reference/runtime/host-main.cjs#L541133-L541152) | `FunctionDeclaration` | no | `operation, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541133-541152](../../../../../../../reference/runtime/host-main.cjs#L541133-L541152) | 9 | 0 | 0 | 5 | 0 | 0 |

### host:541133

Calls written directly in this body: `parseApplyResult`, `parseEmptyResult`, `parseGetStateResult`, `parseInitializeResult`.

SHA-256 of the source span: `f92ffe97ec55abe4a7188555af510390aa3d7c6f99b2f169487feaccb85271ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
