# `isBlobNotFoundError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-not-found-error.js` · [Module README](../../../../modules/agent-kv/blob-not-found-error-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616387-616389](../../../../../reference/runtime/host-main.cjs#L616387-L616389) | `FunctionDeclaration` | no | `error64` |
| [evaluation:284927-284929](../../../../../reference/runtime/sand-eval-runner.cjs#L284927-L284929) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616387-616389](../../../../../reference/runtime/host-main.cjs#L616387-L616389) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284927-284929](../../../../../reference/runtime/sand-eval-runner.cjs#L284927-L284929) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616387

Calls written directly in this body: `findBlobNotFoundError`.

SHA-256 of the source span: `479ae4ed0ee68a261881f94409ad1bb48336832d7237cbad603aa170afcb38bf`.

### evaluation:284927

Calls written directly in this body: `findBlobNotFoundError`.

SHA-256 of the source span: `11134a65afad4000c584e4f3af61fa0d81376184225a521cb1632ee4b419d9f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
