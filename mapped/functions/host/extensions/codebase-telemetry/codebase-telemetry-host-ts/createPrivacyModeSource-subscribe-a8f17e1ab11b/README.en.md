# `createPrivacyModeSource/subscribe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-host.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540964-540982](../../../../../../../reference/runtime/host-main.cjs#L540964-L540982) | `FunctionExpression` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540964-540982](../../../../../../../reference/runtime/host-main.cjs#L540964-L540982) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:540964

Calls written directly in this body: `auth2.subscribe`, `get`, `privacyModeApi.subscribe`.

SHA-256 of the source span: `21da7969d339b4413995a02ee2f747285b658a55b9047ba15ad176e5a3f5e1ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
