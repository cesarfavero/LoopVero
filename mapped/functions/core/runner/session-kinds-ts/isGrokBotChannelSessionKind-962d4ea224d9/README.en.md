# `isGrokBotChannelSessionKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/session-kinds.ts` · [Module README](../../../../../modules/core/runner/session-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535136-535138](../../../../../../reference/runtime/sand-eval-runner.cjs#L535136-L535138) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535136-535138](../../../../../../reference/runtime/sand-eval-runner.cjs#L535136-L535138) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:535136

Calls written directly in this body: `isGrokBotSlackSessionKind`, `isGrokBotTeamsSessionKind`.

SHA-256 of the source span: `6fe3704be71cb9387a0e30f8f53147b73d0a6273b7b161ab241846aace7e2e55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
