# `createSandDurableFileOwner/onDamage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/durable-file-owner.ts` · [Module README](../../../../modules/shared/durable-file-owner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453447-453456](../../../../../reference/runtime/host-main.cjs#L453447-L453456) | `ArrowFunctionExpression` | no | `{ path: path33, cause, copyPath }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453447-453456](../../../../../reference/runtime/host-main.cjs#L453447-L453456) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:453447

Calls written directly in this body: `errorLogTag`, `fileName`, `once2`.

SHA-256 of the source span: `0186b3ac36a1b7267eb4afed7bc75051a070246232da23544b0ecd8c9238c149`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
