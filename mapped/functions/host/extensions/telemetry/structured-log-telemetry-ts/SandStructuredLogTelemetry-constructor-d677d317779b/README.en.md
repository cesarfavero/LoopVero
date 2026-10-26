# `SandStructuredLogTelemetry.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472737-472779](../../../../../../../reference/runtime/host-main.cjs#L472737-L472779) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472737-472779](../../../../../../../reference/runtime/host-main.cjs#L472737-L472779) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:472737

Calls written directly in this body: `brandedVersion`, `logFields`, `new StructuredLogTransport`, `resolveSandBoxIdentityTags`, `resolveSandHttpProxyName`.

Assignment or increment targets: `this.httpProxyName`, `this.transport`.

SHA-256 of the source span: `5d85a298053e8db8f467a2d7de513f068d7e9c97bc637627f49a08fc073a47c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
