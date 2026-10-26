# `_BackendConnectErrors.backendDetails`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736717-736719](../../../../../../../reference/runtime/host-main.cjs#L736717-L736719) | `method` | no | `connectError` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736717-736719](../../../../../../../reference/runtime/host-main.cjs#L736717-L736719) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736717

Calls written directly in this body: `_BackendConnectErrors.backendEntry`.

SHA-256 of the source span: `25a0e09fc811cfc66a57dd14ea2842c217ecc986066fe017b24eb2a7c9b49a4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
