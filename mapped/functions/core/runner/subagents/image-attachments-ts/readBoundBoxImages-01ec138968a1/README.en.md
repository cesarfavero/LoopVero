# `readBoundBoxImages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/image-attachments.ts` · [Module README](../../../../../../modules/core/runner/subagents/image-attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533468-533502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533468-L533502) | `FunctionDeclaration` | yes | `{   ctx,   box,   boxId,   images,   source,   failure: failure3,   rejectUndecodable,   readStore: readStore2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533468-533502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533468-L533502) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:533468

Calls written directly in this body: `forEachBounded`, `images.entries`, `images.flatMap`, `new Map`.

SHA-256 of the source span: `08abc33e7ae242604c3fdc3c383917356ae8ba37062eaaea6958ed0f3132be5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
