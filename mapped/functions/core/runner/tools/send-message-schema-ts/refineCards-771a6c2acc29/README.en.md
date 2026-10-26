# `refineCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741565-741593](../../../../../../../reference/runtime/host-main.cjs#L741565-L741593) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:482512-482540](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482512-L482540) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741565-741593](../../../../../../../reference/runtime/host-main.cjs#L741565-L741593) | 3 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:482512-482540](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482512-L482540) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:741565

Calls written directly in this body: `canonicalRenderCardId`, `cards.entries`, `ctx.addIssue`, `isFieldProvided`, `new Set`, `seen.add`, `seen.has`.

SHA-256 of the source span: `ef51c64889583d8b0343644092c82bad6d71e9a7b9329c3f0d30325c383f499a`.

### evaluation:482512

Calls written directly in this body: `canonicalRenderCardId`, `cards.entries`, `ctx.addIssue`, `isFieldProvided`, `new Set`, `seen.add`, `seen.has`.

SHA-256 of the source span: `53b43c4196c1ca5e4de961f9d0505001fb629e366789e1a8ae1d8ec60dcc1e86`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
