# `_CsnapsCodebaseTelemetryAdapter.publishState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540751-540757](../../../../../../../reference/runtime/host-main.cjs#L540751-L540757) | `method` | no | `stateRequestSequence, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540751-540757](../../../../../../../reference/runtime/host-main.cjs#L540751-L540757) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:540751

Calls written directly in this body: `this.stateSender.send`, `toAdapterState`.

Assignment or increment targets: `this.latestPublishedStateRequestSequence`.

SHA-256 of the source span: `67fa4b7c27d99252f0f988a9151e3789102aa8c5d0ba56e13e18b6b81c4f366b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
