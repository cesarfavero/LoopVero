# `teamOpeningLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/team-bot-prompt.ts` · [Module README](../../../../../modules/core/runner/team-bot-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538524-538533](../../../../../../reference/runtime/sand-eval-runner.cjs#L538524-L538533) | `FunctionDeclaration` | no | `identity2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538524-538533](../../../../../../reference/runtime/sand-eval-runner.cjs#L538524-L538533) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538524

Calls written directly in this body: `buildSandAgentShareLinkUrl`, `teamBotShareLinkInstruction`.

SHA-256 of the source span: `2ed3defb79f4f078aefd7a01f7d85034b1a4a461775817671c148454195fb7c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
