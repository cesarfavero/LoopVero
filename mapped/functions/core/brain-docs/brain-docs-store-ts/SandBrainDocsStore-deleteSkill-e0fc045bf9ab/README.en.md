# `SandBrainDocsStore.deleteSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629958-629973](../../../../../../reference/runtime/sand-eval-runner.cjs#L629958-L629973) | `method` | yes | `{ id }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629958-629973](../../../../../../reference/runtime/sand-eval-runner.cjs#L629958-L629973) | 3 | 0 | 3 | 3 | 0 | 0 |

### evaluation:629958

Calls written directly in this body: `isSafeFolderId`, `stateWriteFailed`, `stateWriteOk`, `this.boxFamilies.has`, `this.ensureLoaded`, `this.readAutomationConfig`, `this.removeAutomation`, `this.removeTree`, `this.requireFamily`, `this.skillRecord`, `this.skillsDir`.

SHA-256 of the source span: `ac245a04c0009efa44167e8ebeb46d9b60378b13f225f631542d029cf4302913`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
