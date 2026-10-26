# `SandStructuredLogTelemetry.reportChromeSessionStage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473059-473062](../../../../../../../reference/runtime/host-main.cjs#L473059-L473062) | `method` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473059-473062](../../../../../../../reference/runtime/host-main.cjs#L473059-L473062) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473059

Calls written directly in this body: `chromeSessionStageTelemetry`, `this.enqueue`.

SHA-256 of the source span: `c26daa748890938bb4a54f2d7798d720677cd909dd2324f944da6da09c440f91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
