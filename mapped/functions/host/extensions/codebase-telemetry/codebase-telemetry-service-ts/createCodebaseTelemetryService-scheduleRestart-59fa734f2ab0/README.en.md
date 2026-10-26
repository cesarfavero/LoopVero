# `createCodebaseTelemetryService/scheduleRestart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541015-541049](../../../../../../../reference/runtime/host-main.cjs#L541015-L541049) | `FunctionDeclaration` | no | `failedAdapter` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541015-541049](../../../../../../../reference/runtime/host-main.cjs#L541015-L541049) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:541015

Calls written directly in this body: `.finally`, `restartPromise.catch`.

Assignment or increment targets: `restartPromise`.

SHA-256 of the source span: `5dcfcd9a91208fc50d48e9697e462e915523b1ce7f84a5fa2db9cbb0ca387889`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
