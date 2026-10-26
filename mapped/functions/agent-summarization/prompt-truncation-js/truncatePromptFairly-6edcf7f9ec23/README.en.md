# `truncatePromptFairly`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-summarization/prompt-truncation.js` · [Module README](../../../../modules/agent-summarization/prompt-truncation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617297-617334](../../../../../reference/runtime/host-main.cjs#L617297-L617334) | `FunctionDeclaration` | no | `params` |
| [evaluation:285837-285874](../../../../../reference/runtime/sand-eval-runner.cjs#L285837-L285874) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617297-617334](../../../../../reference/runtime/host-main.cjs#L617297-L617334) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285837-285874](../../../../../reference/runtime/sand-eval-runner.cjs#L285837-L285874) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:617297

Calls written directly in this body: `Math.max`, `computeMaxMinFairAllocations`, `computeMaxMinFairAllocationsDurationMs.histogram`, `entry.slice`, `formatOmittedMessagesPreamble`, `performance.now`, `resultParts.push`, `serialized.map`, `truncatePreservingUserQuery`.

Assignment or increment targets: `droppedCount`, `fullCount`, `i`, `truncatedCount`.

SHA-256 of the source span: `fc172598e6605d7a8eb81823113827f591c36c94bfdb58d78b4f4139e9b2f347`.

### evaluation:285837

Calls written directly in this body: `Math.max`, `computeMaxMinFairAllocations`, `computeMaxMinFairAllocationsDurationMs.histogram`, `entry.slice`, `formatOmittedMessagesPreamble`, `performance.now`, `resultParts.push`, `serialized.map`, `truncatePreservingUserQuery`.

Assignment or increment targets: `droppedCount`, `fullCount`, `i`, `truncatedCount`.

SHA-256 of the source span: `fc172598e6605d7a8eb81823113827f591c36c94bfdb58d78b4f4139e9b2f347`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
