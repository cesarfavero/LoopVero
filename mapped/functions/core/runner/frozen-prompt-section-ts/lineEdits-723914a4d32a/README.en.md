# `lineEdits`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/frozen-prompt-section.ts` · [Module README](../../../../../modules/core/runner/frozen-prompt-section-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530651-530679](../../../../../../reference/runtime/sand-eval-runner.cjs#L530651-L530679) | `FunctionDeclaration` | no | `before, after` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530651-530679](../../../../../../reference/runtime/sand-eval-runner.cjs#L530651-L530679) | 4 | 5 | 0 | 2 | 0 | 0 |

### evaluation:530651

Calls written directly in this body: `Array.from`, `Math.max`, `edits.push`.

Assignment or increment targets: `i`, `i2`, `j2`, `j3`, `lcs[computed][computed]`.

SHA-256 of the source span: `dde15b2cbd49d18b08822471c38ce470c9e1ca33857820d1ea38fde5a37325a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
