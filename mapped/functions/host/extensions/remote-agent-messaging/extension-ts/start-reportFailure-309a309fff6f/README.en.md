# `start/reportFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/remote-agent-messaging/extension.ts` · [Module README](../../../../../../modules/host/extensions/remote-agent-messaging/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708460-708463](../../../../../../../reference/runtime/host-main.cjs#L708460-L708463) | `ArrowFunctionExpression` | no | `errorClass` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708460-708463](../../../../../../../reference/runtime/host-main.cjs#L708460-L708463) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708460 uses an implicit arrow-function return.

### host:708460

Calls written directly in this body: `telemetry.logs.reportHostExtensionDiagnostic`.

SHA-256 of the source span: `5489fa732ee734e63848e386f9f8c9c8f03cd3e0338abc70638349dafd82f04c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
