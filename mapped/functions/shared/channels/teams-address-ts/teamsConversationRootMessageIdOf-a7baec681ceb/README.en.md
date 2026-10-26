# `teamsConversationRootMessageIdOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754847-754854](../../../../../../reference/runtime/host-main.cjs#L754847-L754854) | `FunctionDeclaration` | no | `conversationId` |
| [evaluation:538199-538206](../../../../../../reference/runtime/sand-eval-runner.cjs#L538199-L538206) | `FunctionDeclaration` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754847-754854](../../../../../../reference/runtime/host-main.cjs#L754847-L754854) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:538199-538206](../../../../../../reference/runtime/sand-eval-runner.cjs#L538199-L538206) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:754847

Calls written directly in this body: `conversationId.indexOf`, `conversationId.slice`.

SHA-256 of the source span: `07892d4ae038509d1c9db0955d04b00c1f5217572ddd521e8dba895cf3e66592`.

### evaluation:538199

Calls written directly in this body: `conversationId.indexOf`, `conversationId.slice`.

SHA-256 of the source span: `07892d4ae038509d1c9db0955d04b00c1f5217572ddd521e8dba895cf3e66592`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
