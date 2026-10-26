# `connectedActivityTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communication-toolset.ts` · [Module README](../../../../../../modules/core/runner/tools/communication-toolset-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763757-763762](../../../../../../../reference/runtime/host-main.cjs#L763757-L763762) | `FunctionDeclaration` | no | `host` |
| [evaluation:556805-556810](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556805-L556810) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763757-763762](../../../../../../../reference/runtime/host-main.cjs#L763757-L763762) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556805-556810](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556805-L556810) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:763757

Calls written directly in this body: `createFetchConnectedActivityTool`, `host.gates.connectedActivity`.

SHA-256 of the source span: `8871df8e53dd04e2df3504a68c1ac574be0465db79b28adaf4d1f6d04c5abc15`.

### evaluation:556805

Calls written directly in this body: `createFetchConnectedActivityTool`, `host.gates.connectedActivity`.

SHA-256 of the source span: `8871df8e53dd04e2df3504a68c1ac574be0465db79b28adaf4d1f6d04c5abc15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
