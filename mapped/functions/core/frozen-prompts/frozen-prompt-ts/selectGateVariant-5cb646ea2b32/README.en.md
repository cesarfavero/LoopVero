# `selectGateVariant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/frozen-prompt.ts` · [Module README](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537373-537396](../../../../../../reference/runtime/sand-eval-runner.cjs#L537373-L537396) | `FunctionDeclaration` | no | `frozenPromptId, base, variants, isGateOn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537373-537396](../../../../../../reference/runtime/sand-eval-runner.cjs#L537373-L537396) | 4 | 2 | 0 | 2 | 2 | 0 |

### evaluation:537373

Calls written directly in this body: `.filter`, `.flatMap`, `.join`, `.sort`, `Object.entries`, `combo.split`, `new Error`, `new Set`, `on.join`, `shard.endsWith`, `shard.slice`, `variants.get`, `variants.keys`.

Assignment or increment targets: `composed[computed]`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `4345e0f57040d6e579505983368afaea26e9cd3b2f22afb67b4f71a083c86133`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
