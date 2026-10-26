# `isTeamsChannelConversationId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754779-754781](../../../../../../reference/runtime/host-main.cjs#L754779-L754781) | `FunctionDeclaration` | no | `conversationId` |
| [evaluation:538131-538133](../../../../../../reference/runtime/sand-eval-runner.cjs#L538131-L538133) | `FunctionDeclaration` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754779-754781](../../../../../../reference/runtime/host-main.cjs#L754779-L754781) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538131-538133](../../../../../../reference/runtime/sand-eval-runner.cjs#L538131-L538133) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754779

Calls written directly in this body: `conversationId.endsWith`.

SHA-256 of the source span: `764874aea146d3678c18d00210d81d7eff64696a43eb51a71ec959435dbb440b`.

### evaluation:538131

Calls written directly in this body: `conversationId.endsWith`.

SHA-256 of the source span: `764874aea146d3678c18d00210d81d7eff64696a43eb51a71ec959435dbb440b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
