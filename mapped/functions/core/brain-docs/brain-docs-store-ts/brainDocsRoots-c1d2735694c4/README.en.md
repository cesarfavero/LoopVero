# `brainDocsRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629247-629252](../../../../../../reference/runtime/sand-eval-runner.cjs#L629247-L629252) | `FunctionDeclaration` | no | `layout, families = effectiveBrainDocsFamilies(layout)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629247-629252](../../../../../../reference/runtime/sand-eval-runner.cjs#L629247-L629252) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629247

Calls written directly in this body: `.flatMap`, `SAND_BRAIN_DOCS_FAMILIES.filter`, `brainDocsRootsByFamily`.

SHA-256 of the source span: `b6d1e9755f36c8bb0320084f8b9324f4bae621d45d6a8f1495d3147f27319aa2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
