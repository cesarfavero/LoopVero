# `SandBrainDocsStore.memoryFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629413-629420](../../../../../../reference/runtime/sand-eval-runner.cjs#L629413-L629420) | `method` | no | `memoryDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629413-629420](../../../../../../reference/runtime/sand-eval-runner.cjs#L629413-L629420) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:629413

Calls written directly in this body: `logs.set`, `new Map`, `this.read`, `this.textFilesUnder`.

SHA-256 of the source span: `8a55618dab1b0119ef0e34af77f212922d421fa734ed0454aa9c53ca9591d282`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
