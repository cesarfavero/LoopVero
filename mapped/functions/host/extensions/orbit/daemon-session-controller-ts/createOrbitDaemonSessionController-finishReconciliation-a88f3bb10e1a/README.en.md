# `createOrbitDaemonSessionController/finishReconciliation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705735-705745](../../../../../../../reference/runtime/host-main.cjs#L705735-L705745) | `FunctionDeclaration` | no | `running` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705735-705745](../../../../../../../reference/runtime/host-main.cjs#L705735-L705745) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:705735

Calls written directly in this body: `maybeResolveDisposal`, `requestReconciliation`.

Assignment or increment targets: `state.reconciliationPromise`.

SHA-256 of the source span: `d52978d51449eef1137f443bf3b73d20f02881ec78ff2e43f2fce5b400a410f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
