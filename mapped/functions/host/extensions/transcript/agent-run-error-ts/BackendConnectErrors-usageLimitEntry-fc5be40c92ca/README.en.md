# `_BackendConnectErrors.usageLimitEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736706-736713](../../../../../../../reference/runtime/host-main.cjs#L736706-L736713) | `method` | no | `connectError` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736706-736713](../../../../../../../reference/runtime/host-main.cjs#L736706-L736713) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:736706

Calls written directly in this body: `connectError.findDetails`, `isSandUsageLimitReason`.

SHA-256 of the source span: `d2ee2ab21aceaa2bfc718014bfb75e527b039190c89621d9cb814abf104f8e0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
