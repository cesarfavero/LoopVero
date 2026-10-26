# `BoxHandoffService.reportBoxHelpResolved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/box-handoff-service.ts` · [Module README](../../../../../../modules/host/extensions/session/box-handoff-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728373-728386](../../../../../../../reference/runtime/host-main.cjs#L728373-L728386) | `method` | no | `agentId, live, decision` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728373-728386](../../../../../../../reference/runtime/host-main.cjs#L728373-L728386) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:728373

Calls written directly in this body: `Date.now`, `Math.max`, `brandedId`, `this.deps.telemetry.trackEvent`.

SHA-256 of the source span: `f94f4bd18690aeffe3ae4ac8c79cf093ca78dc99c40a0b8a2b924fc6b6b09615`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
