# `createPrivacyModeSource/subscribe/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-host.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540977-540980](../../../../../../../reference/runtime/host-main.cjs#L540977-L540980) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540977-540980](../../../../../../../reference/runtime/host-main.cjs#L540977-L540980) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:540977

Calls written directly in this body: `authSubscription.dispose`, `unsubscribeFromPrivacyMode`.

SHA-256 of the source span: `8e6a365eb2bdf07bfe2b18c965f4895ef5364d88d3d6635d3a3b6180900828b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
