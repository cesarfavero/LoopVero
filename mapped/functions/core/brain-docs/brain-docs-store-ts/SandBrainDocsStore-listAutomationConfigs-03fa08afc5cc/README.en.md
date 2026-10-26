# `SandBrainDocsStore.listAutomationConfigs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629564-629571](../../../../../../reference/runtime/sand-eval-runner.cjs#L629564-L629571) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629564-629571](../../../../../../reference/runtime/sand-eval-runner.cjs#L629564-L629571) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:629564

Calls written directly in this body: `entries.push`, `this.automationsDir`, `this.readAutomationConfig`, `this.subdirectories`.

SHA-256 of the source span: `eb60334e6b5b4c0e870b3a6982801c76ed4132a29784404cc37bceb73870fcbc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
