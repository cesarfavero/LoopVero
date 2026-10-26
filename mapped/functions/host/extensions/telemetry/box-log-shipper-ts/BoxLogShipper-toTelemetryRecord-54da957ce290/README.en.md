# `BoxLogShipper.toTelemetryRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731061-731083](../../../../../../../reference/runtime/host-main.cjs#L731061-L731083) | `method` | no | `entry, segment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731061-731083](../../../../../../../reference/runtime/host-main.cjs#L731061-L731083) | 4 | 0 | 0 | 6 | 0 | 1 |

### host:731061

Calls written directly in this body: `JSON.parse`, `boxInfrastructureEventSchema.safeParse`, `this.countRejectedBoxTelemetryLine`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `3b6942bcc0ca6714018e82027d1563cf50322b99667c49af370c824f98c73381`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
