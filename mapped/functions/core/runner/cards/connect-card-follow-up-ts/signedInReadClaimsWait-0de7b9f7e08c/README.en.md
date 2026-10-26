# `signedInReadClaimsWait`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/connect-card-follow-up.ts` · [Module README](../../../../../../modules/core/runner/cards/connect-card-follow-up-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779241-779247](../../../../../../../reference/runtime/host-main.cjs#L779241-L779247) | `FunctionDeclaration` | no | `row` |
| [evaluation:579415-579421](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579415-L579421) | `FunctionDeclaration` | no | `row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779241-779247](../../../../../../../reference/runtime/host-main.cjs#L779241-L779247) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579415-579421](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579415-L579421) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:779241

Calls written directly in this body: `.toLowerCase`, `CURSOR_OAUTH_GROK_SERVER_IDENTIFIERS.has`, `id.slice`, `id.startsWith`, `row.serverId.trim`.

SHA-256 of the source span: `580f1ad518c5c80747c072e9d726051d729041d761af54d030c4470c5a5682a4`.

### evaluation:579415

Calls written directly in this body: `.toLowerCase`, `CURSOR_OAUTH_GROK_SERVER_IDENTIFIERS.has`, `id.slice`, `id.startsWith`, `row.serverId.trim`.

SHA-256 of the source span: `580f1ad518c5c80747c072e9d726051d729041d761af54d030c4470c5a5682a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
