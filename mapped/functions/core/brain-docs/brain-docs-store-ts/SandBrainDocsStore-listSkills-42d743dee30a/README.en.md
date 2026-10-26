# `SandBrainDocsStore.listSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629667-629674](../../../../../../reference/runtime/sand-eval-runner.cjs#L629667-L629674) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629667-629674](../../../../../../reference/runtime/sand-eval-runner.cjs#L629667-L629674) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:629667

Calls written directly in this body: `skills.push`, `this.skillRecord`, `this.skillsDir`, `this.subdirectories`.

SHA-256 of the source span: `968b00ad0daef84fc9fe036a9dbe3a260cf9f6c21ac3cec748c214966ecbea9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
