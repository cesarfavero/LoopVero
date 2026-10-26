# `renderFrozenToolDescriptionUpdates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/frozen-tool-descriptions.ts` · [Module README](../../../../../modules/core/runner/frozen-tool-descriptions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586566-586575](../../../../../../reference/runtime/sand-eval-runner.cjs#L586566-L586575) | `FunctionDeclaration` | no | `updates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586566-586575](../../../../../../reference/runtime/sand-eval-runner.cjs#L586566-L586575) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:586566

Calls written directly in this body: `.join`, `CHANGED_SENTENCES_SUFFIX.trim`, `updates.map`.

SHA-256 of the source span: `65045e2fe09f24668e3471da3a6e364f662982b0e8cb54202ccc9741478874a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
