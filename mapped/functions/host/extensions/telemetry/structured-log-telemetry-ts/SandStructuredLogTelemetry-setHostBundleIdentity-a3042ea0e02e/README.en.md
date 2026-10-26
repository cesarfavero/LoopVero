# `SandStructuredLogTelemetry.setHostBundleIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472780-472783](../../../../../../../reference/runtime/host-main.cjs#L472780-L472783) | `method` | no | `identity` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472780-472783](../../../../../../../reference/runtime/host-main.cjs#L472780-L472783) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:472780

Calls written directly in this body: `this.applyIdentityTags`.

Assignment or increment targets: `this.hostBundleIdentity`.

SHA-256 of the source span: `730c902554949ea313ba5b0904d414d569af20137e5654408e6ef6b27c933691`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
