# `start/restoreCredentialRequestExpiryTimersOnBoot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783756-783763](../../../../../../../reference/runtime/host-main.cjs#L783756-L783763) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783756-783763](../../../../../../../reference/runtime/host-main.cjs#L783756-L783763) | 0 | 0 | 2 | 0 | 0 | 1 |

### host:783756

Calls written directly in this body: `context2.host.log`, `errorLogTag`, `manager.widgetResponses.restoreCredentialRequestExpiryTimers`.

SHA-256 of the source span: `fe5a2cd0176b6cdcb6f1a00499393261c985e2380ff4d93129e253ba1fa5c203`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
