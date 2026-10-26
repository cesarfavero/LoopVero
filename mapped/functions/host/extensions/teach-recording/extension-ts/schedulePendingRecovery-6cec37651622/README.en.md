# `schedulePendingRecovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/extension.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729703-729746](../../../../../../../reference/runtime/host-main.cjs#L729703-L729746) | `FunctionDeclaration` | no | `{   recover,   whenReady,   subscribeToRenewal,   signal,   log: log5 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729703-729746](../../../../../../../reference/runtime/host-main.cjs#L729703-L729746) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729703

Calls written directly in this body: `attempt`, `subscribeToRenewal`.

SHA-256 of the source span: `17962f60e63625478316bb9c6367fb51081bbbe719b2da19090f26d618e3093a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
