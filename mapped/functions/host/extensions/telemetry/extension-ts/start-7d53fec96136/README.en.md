# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/extension.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732304-732376](../../../../../../../reference/runtime/host-main.cjs#L732304-L732376) | `ArrowFunctionExpression` | yes | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732304-732376](../../../../../../../reference/runtime/host-main.cjs#L732304-L732376) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:732304

Calls written directly in this body: `context2.onStop`, `createDeadlinePolicy`, `createExpiryPolicy`, `createHostCrashMarkerStore`, `createHttpProxyNameOverrideStore`, `createIdleWatchdogPolicy`, `createPollingPolicy2`, `logFields`, `new HostTelemetryService`, `pinExperimentsDiagnosticsReporter`, `resolveSandBoxIdentityTags`, `service.api`, `service.start`.

SHA-256 of the source span: `22944c4c85efb8cea985e6512f44f1efbd79951f63e2401594b8128a1fd8871a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
