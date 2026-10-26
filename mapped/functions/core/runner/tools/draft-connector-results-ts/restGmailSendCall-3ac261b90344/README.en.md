# `restGmailSendCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732837-732854](../../../../../../../reference/runtime/host-main.cjs#L732837-L732854) | `FunctionDeclaration` | no | `route, draft, { recipients, sendingAddress }` |
| [evaluation:540359-540376](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540359-L540376) | `FunctionDeclaration` | no | `route, draft, { recipients, sendingAddress }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732837-732854](../../../../../../../reference/runtime/host-main.cjs#L732837-L732854) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540359-540376](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540359-L540376) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:732837

Calls written directly in this body: `draft.cc.join`, `draft.to.join`, `inertDraftText`, `signedGmailBodies`.

SHA-256 of the source span: `e066bde2e12bfd0fdf51c98978e7463dae85b1d59237a97a47957decb2c2a672`.

### evaluation:540359

Calls written directly in this body: `draft.cc.join`, `draft.to.join`, `inertDraftText`, `signedGmailBodies`.

SHA-256 of the source span: `e066bde2e12bfd0fdf51c98978e7463dae85b1d59237a97a47957decb2c2a672`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
