# `_MeetingRequestPrompt.postOutcomes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/meetings/meeting-request-prompt.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754036-754040](../../../../../../reference/runtime/host-main.cjs#L754036-L754040) | `method` | no | `outcomes` |
| [evaluation:535832-535836](../../../../../../reference/runtime/sand-eval-runner.cjs#L535832-L535836) | `method` | no | `outcomes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754036-754040](../../../../../../reference/runtime/host-main.cjs#L754036-L754040) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535832-535836](../../../../../../reference/runtime/sand-eval-runner.cjs#L535832-L535836) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754036

Calls written directly in this body: `.join`, `outcomes.map`.

SHA-256 of the source span: `85c632889ac85c1ae4ea85d28b791099bf3986dec46a4e009a30a68405852ae9`.

### evaluation:535832

Calls written directly in this body: `.join`, `outcomes.map`.

SHA-256 of the source span: `85c632889ac85c1ae4ea85d28b791099bf3986dec46a4e009a30a68405852ae9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
