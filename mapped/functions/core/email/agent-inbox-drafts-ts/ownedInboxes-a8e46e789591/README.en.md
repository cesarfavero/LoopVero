# `ownedInboxes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/agent-inbox-drafts.ts` · [Module README](../../../../../modules/core/email/agent-inbox-drafts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734897-734904](../../../../../../reference/runtime/host-main.cjs#L734897-L734904) | `FunctionDeclaration` | yes | `email3` |
| [evaluation:539321-539328](../../../../../../reference/runtime/sand-eval-runner.cjs#L539321-L539328) | `FunctionDeclaration` | yes | `email3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734897-734904](../../../../../../reference/runtime/host-main.cjs#L734897-L734904) | 0 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:539321-539328](../../../../../../reference/runtime/sand-eval-runner.cjs#L539321-L539328) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:734897

Calls written directly in this body: `email3.listInboxes`, `errorMessage`, `inboxes.map`.

SHA-256 of the source span: `e9a069dd84142c7e399e20a89789e20765c3d0daec3dd1892be4777da2a222af`.

### evaluation:539321

Calls written directly in this body: `email3.listInboxes`, `errorMessage2`, `inboxes.map`.

SHA-256 of the source span: `3671026af4ec227c7c27b8d379a2be05461ef9e733b8e21c3b400f987c032548`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
