# `start/trackVote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/feedback/extension.ts` · [Module README](../../../../../../modules/host/extensions/feedback/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553692-553695](../../../../../../../reference/runtime/host-main.cjs#L553692-L553695) | `ArrowFunctionExpression` | no | `agentId, sentiment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553692-553695](../../../../../../../reference/runtime/host-main.cjs#L553692-L553695) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:553692 uses an implicit arrow-function return.

### host:553692

Calls written directly in this body: `brandedId`, `telemetry.analytics.trackEvent`.

SHA-256 of the source span: `d401cdbb854b6ecb658d86c339405d2ae65910197bb9a287f70e8baf30b62038`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
