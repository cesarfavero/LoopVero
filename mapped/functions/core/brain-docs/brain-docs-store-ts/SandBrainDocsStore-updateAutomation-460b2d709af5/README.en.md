# `SandBrainDocsStore.updateAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629874-629890](../../../../../../reference/runtime/sand-eval-runner.cjs#L629874-L629890) | `method` | yes | `{     id,     spec,     provenance   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629874-629890](../../../../../../reference/runtime/sand-eval-runner.cjs#L629874-L629890) | 3 | 0 | 2 | 2 | 0 | 0 |

### evaluation:629874

Calls written directly in this body: `automationConfigWithSpec`, `isSafeFolderId`, `stateWriteFailed`, `this.automationRecord`, `this.describeAutomationWrite`, `this.ensureLoaded`, `this.readAutomationConfig`, `this.requireFamily`, `this.writeAutomationConfig`.

SHA-256 of the source span: `d43b969fa1d7fd49adfe2a8c38570185b710fa1a044977e8b5fd4fbc5cffb4da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
