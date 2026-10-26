# `containWithin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/paths.ts` · [Module README](../../../../../modules/shared/node/paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430805-430815](../../../../../../reference/runtime/host-main.cjs#L430805-L430815) | `FunctionDeclaration` | yes | `roots, p2` |
| [evaluation:530415-530425](../../../../../../reference/runtime/sand-eval-runner.cjs#L530415-L530425) | `FunctionDeclaration` | yes | `roots, p2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430805-430815](../../../../../../reference/runtime/host-main.cjs#L430805-L430815) | 3 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:530415-530425](../../../../../../reference/runtime/sand-eval-runner.cjs#L530415-L530425) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:430805

Calls written directly in this body: `Promise.all`, `realRoots.some`, `realpathNearestExisting`, `roots.map`, `roots.some`.

SHA-256 of the source span: `40282aa1fa7396ce8cac93ca0f0636f12e624c349f8dc14f206680269470444b`.

### evaluation:530415

Calls written directly in this body: `Promise.all`, `realRoots.some`, `realpathNearestExisting`, `roots.map`, `roots.some`.

SHA-256 of the source span: `0b0cc340b083ca6dbc98cb3f4df9caffa87476ceb147cb317b3ccef703baa5d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
