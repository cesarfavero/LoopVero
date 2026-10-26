# `privacyModeRetryErrorProjection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472404-472413](../../../../../../../reference/runtime/host-main.cjs#L472404-L472413) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472404-472413](../../../../../../../reference/runtime/host-main.cjs#L472404-L472413) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472404

Calls written directly in this body: `brandLiteralEnum`, `brandedConnectCode`, `sandErrorTags`, `sandErrorWireCode`.

SHA-256 of the source span: `19421ff7d2152043fe20d270d85aae3e27299cdd2faaa8813f37baff0dc0aac1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
