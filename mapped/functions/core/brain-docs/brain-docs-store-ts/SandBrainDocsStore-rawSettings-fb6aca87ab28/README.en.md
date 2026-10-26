# `SandBrainDocsStore.rawSettings`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629751-629754](../../../../../../reference/runtime/sand-eval-runner.cjs#L629751-L629754) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629751-629754](../../../../../../reference/runtime/sand-eval-runner.cjs#L629751-L629754) | 1 | 0 | 1 | 1 | 0 | 0 |

### evaluation:629751

Calls written directly in this body: `.toString`, `Buffer.from`, `parseRawSandSettings`, `this.options.fs.readFile`.

SHA-256 of the source span: `60abab8dda5b12af718c6afbec45fff17eca99e3a63d1a2d4a9b9d6a109e3d7b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
