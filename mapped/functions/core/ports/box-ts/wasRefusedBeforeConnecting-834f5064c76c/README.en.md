# `wasRefusedBeforeConnecting`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/box.ts` · [Module README](../../../../../modules/core/ports/box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:475752-475761](../../../../../../reference/runtime/sand-eval-runner.cjs#L475752-L475761) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475752-475761](../../../../../../reference/runtime/sand-eval-runner.cjs#L475752-L475761) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:475752

Calls written directly in this body: `REFUSED_BEFORE_CONNECTING_CODES.has`.

Assignment or increment targets: `cause`, `depth`.

SHA-256 of the source span: `c258cace09cd6461c0e87fe7880dff00ca464df5992a5c44c49b6ac29c9eee69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
