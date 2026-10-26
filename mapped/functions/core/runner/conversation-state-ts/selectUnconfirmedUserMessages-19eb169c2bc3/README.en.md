# `selectUnconfirmedUserMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529175-529192](../../../../../../reference/runtime/sand-eval-runner.cjs#L529175-L529192) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529175-529192](../../../../../../reference/runtime/sand-eval-runner.cjs#L529175-L529192) | 6 | 0 | 0 | 6 | 0 | 0 |

### evaluation:529175

Calls written directly in this body: `.filter`, `recentUserMessages.findIndex`, `recentUserMessages.slice`.

Assignment or increment targets: `startIndex`.

SHA-256 of the source span: `8f8fcedafb406307e1a697f9b7190b76705f2e0fe0fadf4695357ef07ed9e446`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
