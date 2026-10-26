# `selectHostVariant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/frozen-prompt.ts` · [Module README](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537343-537372](../../../../../../reference/runtime/sand-eval-runner.cjs#L537343-L537372) | `FunctionDeclaration` | no | `frozenPromptId, files, variants, host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537343-537372](../../../../../../reference/runtime/sand-eval-runner.cjs#L537343-L537372) | 5 | 2 | 0 | 2 | 2 | 0 |

### evaluation:537343

Calls written directly in this body: `.filter`, `.split`, `JSON.stringify`, `Object.entries`, `hostOfVariant`, `names3.find`, `names3.join`, `new Error`, `new Set`, `order.join`, `removed.add`, `sameHost`, `shard.endsWith`, `shard.slice`, `variants.get`, `variants.keys`.

Assignment or increment targets: `composed[computed]`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `e87dbb40d15f3f50da7168bed4ddfd4a8f6e97115f1c344134a8ed23f1c18b16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
