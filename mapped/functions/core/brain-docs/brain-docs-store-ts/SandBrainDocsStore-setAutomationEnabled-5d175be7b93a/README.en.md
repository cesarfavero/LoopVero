# `SandBrainDocsStore.setAutomationEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629891-629906](../../../../../../reference/runtime/sand-eval-runner.cjs#L629891-L629906) | `method` | yes | `{     id,     isEnabled   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629891-629906](../../../../../../reference/runtime/sand-eval-runner.cjs#L629891-L629906) | 5 | 0 | 2 | 2 | 0 | 0 |

### evaluation:629891

Calls written directly in this body: `isSafeFolderId`, `stateWriteFailed`, `stateWriteOk`, `this.ensureLoaded`, `this.readAutomationConfig`, `this.requireFamily`, `this.writeAutomationConfig`.

SHA-256 of the source span: `2b4a1b32b3b2e0315fad5bfde02b967e900c50c6aba9d87518fb53ce7599103b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
