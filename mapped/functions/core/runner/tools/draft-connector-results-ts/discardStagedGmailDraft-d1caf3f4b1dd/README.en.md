# `discardStagedGmailDraft`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732724-732727](../../../../../../../reference/runtime/host-main.cjs#L732724-L732727) | `FunctionDeclaration` | yes | `execute, draftId` |
| [evaluation:540246-540249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540246-L540249) | `FunctionDeclaration` | yes | `execute, draftId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732724-732727](../../../../../../../reference/runtime/host-main.cjs#L732724-L732727) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:540246-540249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540246-L540249) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:732724

Calls written directly in this body: `execute`.

SHA-256 of the source span: `8328868b6459658d6c27f8e906bd55a10d8afece6388c9704ea74eddd6c2579c`.

### evaluation:540246

Calls written directly in this body: `execute`.

SHA-256 of the source span: `8328868b6459658d6c27f8e906bd55a10d8afece6388c9704ea74eddd6c2579c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
