# `SandHost.reportGatewayCommandError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786401-786407](../../../../../reference/runtime/host-main.cjs#L786401-L786407) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786401-786407](../../../../../reference/runtime/host-main.cjs#L786401-L786407) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:786401

Calls written directly in this body: `.api`, `.logs.reportGatewayCommandError`, `commandErrorReportToTelemetry`, `this.requireHostExtensions`.

SHA-256 of the source span: `54c5b34c09082d722febed8c228fb4e29ef610a5c430a16040aa0f2641121b4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
