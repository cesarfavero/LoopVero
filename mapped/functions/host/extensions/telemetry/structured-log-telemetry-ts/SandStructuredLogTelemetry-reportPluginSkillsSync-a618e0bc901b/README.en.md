# `SandStructuredLogTelemetry.reportPluginSkillsSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473303-473316](../../../../../../../reference/runtime/host-main.cjs#L473303-L473316) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473303-473316](../../../../../../../reference/runtime/host-main.cjs#L473303-L473316) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:473303

Calls written directly in this body: `Math.round`, `brandLiteralEnum`, `brandedErrorTag`, `logFields`, `this.enqueue`.

SHA-256 of the source span: `116966e883c87f9ef7150cb4e4544757c16e17c7e893ea5a338fe89584231180`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
