# `findBlobNotFoundError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-not-found-error.js` · [Module README](../../../../modules/agent-kv/blob-not-found-error-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616371-616386](../../../../../reference/runtime/host-main.cjs#L616371-L616386) | `FunctionDeclaration` | no | `error64` |
| [evaluation:284911-284926](../../../../../reference/runtime/sand-eval-runner.cjs#L284911-L284926) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616371-616386](../../../../../reference/runtime/host-main.cjs#L616371-L616386) | 3 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:284911-284926](../../../../../reference/runtime/sand-eval-runner.cjs#L284911-L284926) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:616371

Calls written directly in this body: `isBlobNotFoundErrorNode`.

Assignment or increment targets: `current2`, `depth`.

SHA-256 of the source span: `0fdced12d4016c4120d07873eff1917cf7309a513e3eb590c666521ce5d9cf46`.

### evaluation:284911

Calls written directly in this body: `isBlobNotFoundErrorNode`.

Assignment or increment targets: `current2`, `depth`.

SHA-256 of the source span: `cc69fa043bb0f9dec9255805df5c028f9a6d6e7aee0b15c2e5df06dcf93f7e4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
