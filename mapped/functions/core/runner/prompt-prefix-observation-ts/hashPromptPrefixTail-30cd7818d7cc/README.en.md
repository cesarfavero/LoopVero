# `hashPromptPrefixTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546491-546536](../../../../../../reference/runtime/sand-eval-runner.cjs#L546491-L546536) | `FunctionDeclaration` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546491-546536](../../../../../../reference/runtime/sand-eval-runner.cjs#L546491-L546536) | 8 | 1 | 0 | 1 | 0 | 0 |

### evaluation:546491

Calls written directly in this body: `.filter`, `.includes`, `.map`, `Math.max`, `isTurnMessage`, `messageContentForHash`, `messageText`, `messages.slice`, `sha256HexOfText`, `sha256HexOfTexts`, `sizeOf`, `splitDrivingMessage`, `turn.findLastIndex`, `turn.slice`, `turnNoteBlocksOf`.

Assignment or increment targets: `drivingIndex`, `end`, `start`.

SHA-256 of the source span: `26b3cb5797441a8298b1880edb570d8f9fd8a63e9c084af453eb08e7ccf5582b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
