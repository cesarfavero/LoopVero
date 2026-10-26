# `SandBrainDocsStore.writeSkillRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629689-629695](../../../../../../reference/runtime/sand-eval-runner.cjs#L629689-L629695) | `method` | yes | `id, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629689-629695](../../../../../../reference/runtime/sand-eval-runner.cjs#L629689-L629695) | 1 | 0 | 1 | 1 | 0 | 0 |

### evaluation:629689

Calls written directly in this body: `parseSkillFile`, `serializeSkillFile`, `this.read`, `this.skillRecord`, `this.skillsDir`, `this.writeFile`.

SHA-256 of the source span: `f3bfe90def4a2141ac02f4e41754dfb7f96e6ec99213f72410a05980949df534`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
