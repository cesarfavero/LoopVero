# `_BackendConnectErrors.scan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736720-736724](../../../../../../../reference/runtime/host-main.cjs#L736720-L736724) | `method` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736720-736724](../../../../../../../reference/runtime/host-main.cjs#L736720-L736724) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736720

Calls written directly in this body: `_BackendConnectErrors.walk`, `new Set`.

SHA-256 of the source span: `a1ed7d7614dc7c624d41aa3a8738e6f3429aeceb24e5c80797e268a4001cb077`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
