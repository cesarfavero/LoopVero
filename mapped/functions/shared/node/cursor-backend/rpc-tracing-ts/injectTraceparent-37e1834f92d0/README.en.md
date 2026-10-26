# `injectTraceparent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/rpc-tracing.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224831-224835](../../../../../../../reference/runtime/host-main.cjs#L224831-L224835) | `FunctionDeclaration` | no | `header, span` |
| [evaluation:511864-511868](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511864-L511868) | `FunctionDeclaration` | no | `header, span` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224831-224835](../../../../../../../reference/runtime/host-main.cjs#L224831-L224835) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511864-511868](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511864-L511868) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:224831

Calls written directly in this body: `header.set`, `spanTraceparent`.

SHA-256 of the source span: `4bae9ae94397f0e70d1eed752a2ae57b9f6b3910611a3db3d3e66613d9eb565c`.

### evaluation:511864

Calls written directly in this body: `header.set`, `spanTraceparent`.

SHA-256 of the source span: `4bae9ae94397f0e70d1eed752a2ae57b9f6b3910611a3db3d3e66613d9eb565c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
