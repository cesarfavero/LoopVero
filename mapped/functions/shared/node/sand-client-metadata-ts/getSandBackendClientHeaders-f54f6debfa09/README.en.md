# `getSandBackendClientHeaders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/sand-client-metadata.ts` · [Module README](../../../../../modules/shared/node/sand-client-metadata-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175868-175878](../../../../../../reference/runtime/host-main.cjs#L175868-L175878) | `FunctionDeclaration` | no | `identity` |
| [evaluation:511803-511813](../../../../../../reference/runtime/sand-eval-runner.cjs#L511803-L511813) | `FunctionDeclaration` | no | `identity2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175868-175878](../../../../../../reference/runtime/host-main.cjs#L175868-L175878) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511803-511813](../../../../../../reference/runtime/sand-eval-runner.cjs#L511803-L511813) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:175868

Calls written directly in this body: `clientSourceHeaderOf`, `sandBackendUserAgentOf`.

SHA-256 of the source span: `f1ec21cd771aa7c8689a5c2c12c15cab02556daca9be64f2d420014db082b5a6`.

### evaluation:511803

Calls written directly in this body: `clientSourceHeaderOf`, `sandBackendUserAgentOf`.

SHA-256 of the source span: `c9d85b3b344c1fcdd88ec421e38998da845de6357bafa944564a5e31fb637d58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
