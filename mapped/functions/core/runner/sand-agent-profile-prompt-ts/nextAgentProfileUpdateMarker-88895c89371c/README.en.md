# `nextAgentProfileUpdateMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-agent-profile-prompt.ts` · [Module README](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529857-529866](../../../../../../reference/runtime/sand-eval-runner.cjs#L529857-L529866) | `FunctionDeclaration` | no | `text3, from2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529857-529866](../../../../../../reference/runtime/sand-eval-runner.cjs#L529857-L529866) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:529857

Calls written directly in this body: `text3.indexOf`.

Assignment or increment targets: `found`.

SHA-256 of the source span: `4c231bf4985bf896e73f0b52708bab56d13ac0a28b6ce918191b6c1266f491c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
