# `startLocalExec/reportProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/local-exec/extension.ts` · [Module README](../../../../../../modules/host/extensions/local-exec/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682177-682177](../../../../../../../reference/runtime/host-main.cjs#L682177-L682177) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682177-682177](../../../../../../../reference/runtime/host-main.cjs#L682177-L682177) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:682177 uses an implicit arrow-function return.

### host:682177

Calls written directly in this body: `logs.reportLocalExecProvider`.

SHA-256 of the source span: `963cfc6b6cca00e85a6a96035a10990b690fafd55dacbe19ecec79707b9d7fd4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
