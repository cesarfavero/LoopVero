# `createOrbitDaemonSessionController/withdrawOperations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705987-705990](../../../../../../../reference/runtime/host-main.cjs#L705987-L705990) | `FunctionDeclaration` | no | `openSession2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705987-705990](../../../../../../../reference/runtime/host-main.cjs#L705987-L705990) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:705987

Calls written directly in this body: `openSession2.operationPublication.abortController.abort`.

Assignment or increment targets: `openSession2.operationPublication`.

SHA-256 of the source span: `4bda22d71962a6d51cce8c9df4c5d554c1668628b41d54de404a0e38b49735c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
