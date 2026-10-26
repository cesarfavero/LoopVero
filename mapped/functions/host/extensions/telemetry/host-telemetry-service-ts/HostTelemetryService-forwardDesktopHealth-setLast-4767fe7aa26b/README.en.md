# `HostTelemetryService.forwardDesktopHealth/setLast`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732287-732290](../../../../../../../reference/runtime/host-main.cjs#L732287-L732290) | `ArrowFunctionExpression` | no | `revision, atMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732287-732290](../../../../../../../reference/runtime/host-main.cjs#L732287-L732290) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:732287

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.lastForwardedDesktopHealthAtMs`, `this.lastForwardedDesktopHealthRevision`.

SHA-256 of the source span: `bbd5caeeb14cd3144c761c1a9d9cb43cecc26dc7f2e1f25916afca2ef1190e1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
