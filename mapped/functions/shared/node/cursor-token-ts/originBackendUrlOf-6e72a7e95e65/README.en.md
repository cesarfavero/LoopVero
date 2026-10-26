# `originBackendUrlOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175747-175752](../../../../../../reference/runtime/host-main.cjs#L175747-L175752) | `FunctionDeclaration` | no | `configuredOriginBackendUrl, readBackendUrl` |
| [evaluation:511722-511727](../../../../../../reference/runtime/sand-eval-runner.cjs#L511722-L511727) | `FunctionDeclaration` | no | `configuredOriginBackendUrl, readBackendUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175747-175752](../../../../../../reference/runtime/host-main.cjs#L175747-L175752) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511722-511727](../../../../../../reference/runtime/sand-eval-runner.cjs#L511722-L511727) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:175747

Calls written directly in this body: `.toString`, `configuredOriginBackendUrl.trim`, `new URL`, `readBackendUrl`.

SHA-256 of the source span: `4287e249d64cd7a36940293ae8c16ec1d9b5577d578ff69b4a00b29328ccb5cb`.

### evaluation:511722

Calls written directly in this body: `.toString`, `configuredOriginBackendUrl.trim`, `new URL`, `readBackendUrl`.

SHA-256 of the source span: `4287e249d64cd7a36940293ae8c16ec1d9b5577d578ff69b4a00b29328ccb5cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
