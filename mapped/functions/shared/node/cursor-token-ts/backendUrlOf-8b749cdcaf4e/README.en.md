# `backendUrlOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175744-175746](../../../../../../reference/runtime/host-main.cjs#L175744-L175746) | `FunctionDeclaration` | no | `sandBackendUrl, cursorApiBaseUrl` |
| [evaluation:511719-511721](../../../../../../reference/runtime/sand-eval-runner.cjs#L511719-L511721) | `FunctionDeclaration` | no | `sandBackendUrl, cursorApiBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175744-175746](../../../../../../reference/runtime/host-main.cjs#L175744-L175746) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511719-511721](../../../../../../reference/runtime/sand-eval-runner.cjs#L511719-L511721) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175744

Calls written directly in this body: `.toString`, `new URL`.

SHA-256 of the source span: `f06fa0c208904493764194edcc98a401e46ce358fbe0f3b6e8be0aba6116d58e`.

### evaluation:511719

Calls written directly in this body: `.toString`, `new URL`.

SHA-256 of the source span: `f06fa0c208904493764194edcc98a401e46ce358fbe0f3b6e8be0aba6116d58e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
