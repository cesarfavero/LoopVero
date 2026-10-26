# `isTeamsLegacyConversationId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754782-754784](../../../../../../reference/runtime/host-main.cjs#L754782-L754784) | `FunctionDeclaration` | no | `conversationId` |
| [evaluation:538134-538136](../../../../../../reference/runtime/sand-eval-runner.cjs#L538134-L538136) | `FunctionDeclaration` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754782-754784](../../../../../../reference/runtime/host-main.cjs#L754782-L754784) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538134-538136](../../../../../../reference/runtime/sand-eval-runner.cjs#L538134-L538136) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754782

Calls written directly in this body: `conversationId.endsWith`.

SHA-256 of the source span: `98a8da1baf65cb03599c2f770c151811663ffd123ec3c30983b9e205cb2f706a`.

### evaluation:538134

Calls written directly in this body: `conversationId.endsWith`.

SHA-256 of the source span: `98a8da1baf65cb03599c2f770c151811663ffd123ec3c30983b9e205cb2f706a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
