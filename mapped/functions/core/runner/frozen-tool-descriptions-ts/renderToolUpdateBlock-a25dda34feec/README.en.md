# `renderToolUpdateBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/frozen-tool-descriptions.ts` · [Module README](../../../../../modules/core/runner/frozen-tool-descriptions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586551-586565](../../../../../../reference/runtime/sand-eval-runner.cjs#L586551-L586565) | `FunctionDeclaration` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586551-586565](../../../../../../reference/runtime/sand-eval-runner.cjs#L586551-L586565) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:586551

Calls written directly in this body: `.join`, `edits.map`, `lineEdits`, `sentencesOf`.

SHA-256 of the source span: `b6ae8fa078ca3b6efa85f43b024a2c97d516dec436cf61883cf286b19520595b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
