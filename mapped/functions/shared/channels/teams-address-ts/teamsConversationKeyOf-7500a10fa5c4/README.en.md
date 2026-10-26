# `teamsConversationKeyOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754843-754846](../../../../../../reference/runtime/host-main.cjs#L754843-L754846) | `FunctionDeclaration` | no | `conversationId` |
| [evaluation:538195-538198](../../../../../../reference/runtime/sand-eval-runner.cjs#L538195-L538198) | `FunctionDeclaration` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754843-754846](../../../../../../reference/runtime/host-main.cjs#L754843-L754846) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538195-538198](../../../../../../reference/runtime/sand-eval-runner.cjs#L538195-L538198) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:754843

Calls written directly in this body: `conversationId.indexOf`, `conversationId.slice`.

SHA-256 of the source span: `99cc2aaf488e21f1b7bafc6d2afb90d99e85de1cf2fe80e65ea9cb99e649d19d`.

### evaluation:538195

Calls written directly in this body: `conversationId.indexOf`, `conversationId.slice`.

SHA-256 of the source span: `99cc2aaf488e21f1b7bafc6d2afb90d99e85de1cf2fe80e65ea9cb99e649d19d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
