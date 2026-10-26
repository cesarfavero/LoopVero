# `formatMissingBlobSuffix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-not-found-error.js` · [Module README](../../../../modules/agent-kv/blob-not-found-error-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616347-616354](../../../../../reference/runtime/host-main.cjs#L616347-L616354) | `FunctionDeclaration` | no | `blobIdHexes` |
| [evaluation:284887-284894](../../../../../reference/runtime/sand-eval-runner.cjs#L284887-L284894) | `FunctionDeclaration` | no | `blobIdHexes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616347-616354](../../../../../reference/runtime/host-main.cjs#L616347-L616354) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:284887-284894](../../../../../reference/runtime/sand-eval-runner.cjs#L284887-L284894) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:616347

Calls written directly in this body: `.map`, `blobIdHexes.slice`, `shown.join`.

SHA-256 of the source span: `36787cb57a468266c61dec487767c4414e32cb8b02c7381228c6c5cfdd363c15`.

### evaluation:284887

Calls written directly in this body: `.map`, `blobIdHexes.slice`, `shown.join`.

SHA-256 of the source span: `36787cb57a468266c61dec487767c4414e32cb8b02c7381228c6c5cfdd363c15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
