# `authClientIdOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175762-175766](../../../../../../reference/runtime/host-main.cjs#L175762-L175766) | `FunctionDeclaration` | no | `backendUrl, override` |
| [evaluation:511728-511732](../../../../../../reference/runtime/sand-eval-runner.cjs#L511728-L511732) | `FunctionDeclaration` | no | `backendUrl, override` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175762-175766](../../../../../../reference/runtime/host-main.cjs#L175762-L175766) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511728-511732](../../../../../../reference/runtime/sand-eval-runner.cjs#L511728-L511732) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:175762

Calls written directly in this body: `isDevBackendHostname`, `new URL`.

SHA-256 of the source span: `f858915d1e4abf9c678acb3d78dc1e8e50ae8c264878ee41c5fcd71513eef557`.

### evaluation:511728

Calls written directly in this body: `isDevBackendHostname`, `new URL`.

SHA-256 of the source span: `9942bacc8f12d24e82acb8dd5d617181d72c5e3b198e017bd772d7e25ea737c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
