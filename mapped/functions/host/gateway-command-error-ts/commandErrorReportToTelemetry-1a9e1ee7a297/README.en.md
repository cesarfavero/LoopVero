# `commandErrorReportToTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-command-error.ts` · [Module README](../../../../modules/host/gateway-command-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489592-489606](../../../../../reference/runtime/host-main.cjs#L489592-L489606) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489592-489606](../../../../../reference/runtime/host-main.cjs#L489592-L489606) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:489592

Calls written directly in this body: `Math.round`, `brandedErrorClass`, `brandedId`, `logFields`.

SHA-256 of the source span: `99e9fad788000c86170b1ea0f77ae5d54570999875b6d2c45d6bad6ffff1a851`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
