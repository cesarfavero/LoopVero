# `AutomationRuntime.emitAutomationLifecycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734170-734223](../../../../../../../reference/runtime/host-main.cjs#L734170-L734223) | `method` | no | `{     agentId,     action,     automation,     source   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734170-734223](../../../../../../../reference/runtime/host-main.cjs#L734170-L734223) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:734170

Calls written directly in this body: `Date.now`, `Math.max`, `brandedId`, `stableAutomationId`, `summarizeAutomationScheduleForTelemetry`, `this.tm.productAnalytics.trackEvent`, `this.tm.sessionStore.getUserTimeZone`, `this.tm.telemetry.reportAutomationLifecycle`.

SHA-256 of the source span: `3682fcae79613de7cc6364caff1ee7f2ecba310d8ac706ae09ca2b057a052aa5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
