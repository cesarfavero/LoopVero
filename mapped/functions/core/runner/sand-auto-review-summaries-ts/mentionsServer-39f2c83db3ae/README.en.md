# `mentionsServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:491148-491152](../../../../../../reference/runtime/sand-eval-runner.cjs#L491148-L491152) | `FunctionDeclaration` | no | `text3, serverDisplayName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491148-491152](../../../../../../reference/runtime/sand-eval-runner.cjs#L491148-L491152) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:491148

Calls written directly in this body: `.includes`, `server.toLowerCase`, `serverDisplayName.trim`, `text3.toLowerCase`.

SHA-256 of the source span: `bc7657895117c7a1c16830ba9e3ce85accae4e57c165d7e910fb873521fc0250`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
