# `SandBrainDocsStore.createAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629855-629873](../../../../../../reference/runtime/sand-eval-runner.cjs#L629855-L629873) | `method` | yes | `{     spec,     provenance,     sessionId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629855-629873](../../../../../../reference/runtime/sand-eval-runner.cjs#L629855-L629873) | 2 | 0 | 2 | 2 | 0 | 0 |

### evaluation:629855

Calls written directly in this body: `automationConfigFromSpec`, `new Set`, `this.automationRecord`, `this.automationsDir`, `this.describeAutomationWrite`, `this.ensureLoaded`, `this.listAutomationConfigs`, `this.now`, `this.requireFamily`, `this.subdirectories`, `this.writeAutomationConfig`, `uniqueAutomationId`.

SHA-256 of the source span: `2be64c49669ff2cf412ed520fd742ea202c6c3f9f45ac385a3ddbef238e8e5de`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
