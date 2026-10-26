# `SandHost.reportGatewayCommandSuccess`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786408-786414](../../../../../reference/runtime/host-main.cjs#L786408-L786414) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786408-786414](../../../../../reference/runtime/host-main.cjs#L786408-L786414) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:786408

Calls written directly in this body: `commandSuccessReportToTelemetry`, `this.telemetry.reportGatewayCommandTiming`.

SHA-256 of the source span: `d30c04a360d9c063fa48bde9b82aaf63ea3dee05f421776b1dd8391b941963e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
