# `boundedAgentId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472699-472701](../../../../../../../reference/runtime/host-main.cjs#L472699-L472701) | `FunctionDeclaration` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472699-472701](../../../../../../../reference/runtime/host-main.cjs#L472699-L472701) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472699

Calls written directly in this body: `SAND_AGENT_ID_SHAPE.test`, `brandedId`.

SHA-256 of the source span: `9c7f884cba3b29009682a7606d5018c94278c6b35041577505d2b6dcf66ce185`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
