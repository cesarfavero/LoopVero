# `createTurnSettle/persistPendingProfileAnnouncement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590713-590723](../../../../../../reference/runtime/sand-eval-runner.cjs#L590713-L590723) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590713-590723](../../../../../../reference/runtime/sand-eval-runner.cjs#L590713-L590723) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590713

Calls written directly in this body: `host.persistAnnouncedAgentProfile`.

Assignment or increment targets: `pendingProfileAnnouncement`.

SHA-256 of the source span: `8f7c81a1d1deb1448c6e88d5849b852fbe3aba60b7176b3a7f7ef3c75831d5c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
