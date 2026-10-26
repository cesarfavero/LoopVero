# `createSandSubagentRequestedModel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `core/runner/cursor-inference-session.ts` · [Module README](../../../../../modules/core/runner/cursor-inference-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:597512-597514](../../../../../../reference/runtime/sand-eval-runner.cjs#L597512-L597514) | `FunctionDeclaration` | no | `modelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597512-597514](../../../../../../reference/runtime/sand-eval-runner.cjs#L597512-L597514) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597512

Calls written directly in this body: `new RequestedModel`.

SHA-256 of the source span: `d497cce8eeb456d1f6958aadc58bddc517c9778b00f9ef055c6eb3062fa2849d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
