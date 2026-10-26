# `withNavigationTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/navigation-telemetry.ts` · [Module README](../../../../../modules/core/runner/navigation-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484615-484695](../../../../../../reference/runtime/sand-eval-runner.cjs#L484615-L484695) | `FunctionDeclaration` | no | `auditor, options2, recordGuardrailOnStampedAuditor` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484615-484695](../../../../../../reference/runtime/sand-eval-runner.cjs#L484615-L484695) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:484615

Calls written directly in this body: `withBotBlockDetection`, `withSiteVisitTracking`.

SHA-256 of the source span: `3f2278060b53ab38fc8bef2d0779dd38519e4b5087e8282e6e4cc1bac03a4841`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
