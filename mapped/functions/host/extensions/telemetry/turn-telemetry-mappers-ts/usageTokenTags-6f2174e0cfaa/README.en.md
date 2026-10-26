# `usageTokenTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472357-472367](../../../../../../../reference/runtime/host-main.cjs#L472357-L472367) | `FunctionDeclaration` | no | `usage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472357-472367](../../../../../../../reference/runtime/host-main.cjs#L472357-L472367) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:472357

Calls written directly in this body: `logFields`, `totalInputTokens`.

SHA-256 of the source span: `e8e0d53e159728d7fe846355869b097544933017c19290fe4e2ef63e4d91bb92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
