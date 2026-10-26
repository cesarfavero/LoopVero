# `parsePromptPrefixSnapshotJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-snapshot.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-snapshot-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717216-717225](../../../../../../reference/runtime/host-main.cjs#L717216-L717225) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717216-717225](../../../../../../reference/runtime/host-main.cjs#L717216-L717225) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:717216

Calls written directly in this body: `JSON.parse`, `parsePromptPrefixSnapshot`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `e0a689a55dc0f3157124370d5f0027673de58f2664ee1b360770cd16a5908233`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
