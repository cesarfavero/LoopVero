# `parseChannelConfigFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629326-629333](../../../../../../reference/runtime/sand-eval-runner.cjs#L629326-L629333) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629326-629333](../../../../../../reference/runtime/sand-eval-runner.cjs#L629326-L629333) | 3 | 0 | 0 | 1 | 1 | 0 |

### evaluation:629326

Calls written directly in this body: `JSON.parse`, `new TypeError`.

Explicit throw targets: `TypeError`.

SHA-256 of the source span: `72d8c9f00029fa30b52b202988161d9cdf097785ba51ac80f7163848aca39da3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
