# `runHostMain/beforeResumeOwnership/onCommandComplete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/main.ts` · [Module README](../../../../modules/host/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:787003-787003](../../../../../reference/runtime/host-main.cjs#L787003-L787003) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:787003-787003](../../../../../reference/runtime/host-main.cjs#L787003-L787003) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:787003 uses an implicit arrow-function return.

### host:787003

Calls written directly in this body: `host.reportGatewayCommandSuccess`.

SHA-256 of the source span: `102a2a8b713aac273d115a0a0185599d569f9d7f4df2bb2c0dda6a4e11f504a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
