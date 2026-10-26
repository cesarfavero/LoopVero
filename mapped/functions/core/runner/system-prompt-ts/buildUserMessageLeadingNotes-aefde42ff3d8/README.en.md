# `buildUserMessageLeadingNotes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532509-532516](../../../../../../reference/runtime/sand-eval-runner.cjs#L532509-L532516) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532509-532516](../../../../../../reference/runtime/sand-eval-runner.cjs#L532509-L532516) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532509

Calls written directly in this body: `.filter`, `.join`, `buildReplyContextNote`, `buildSenderMachineNote`, `buildSenderPlatformNote`, `buildUserMessageAddressNote`.

SHA-256 of the source span: `54265e27e76613384e6160993ce38289e806f5a6ccc7b272966ec246775f75d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
