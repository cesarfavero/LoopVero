# `start/sweepExpiredVirtualCardsOnBoot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783745-783754](../../../../../../../reference/runtime/host-main.cjs#L783745-L783754) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783745-783754](../../../../../../../reference/runtime/host-main.cjs#L783745-L783754) | 0 | 0 | 2 | 0 | 0 | 1 |

### host:783745

Calls written directly in this body: `context2.host.log`, `errorLogTag`, `manager.widgetResponses.expireAllPendingVirtualCardApprovalCards`.

SHA-256 of the source span: `242b20ac40842320c77afe15828921f99b53e5a9b67b6235cf08f43f7ef016b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
