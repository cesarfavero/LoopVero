# `teamsConversationAfter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/session-context-prompt.ts` · [Module README](../../../../../modules/core/runner/session-context-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538328-538332](../../../../../../reference/runtime/sand-eval-runner.cjs#L538328-L538332) | `FunctionDeclaration` | no | `sessionId, prefix` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538328-538332](../../../../../../reference/runtime/sand-eval-runner.cjs#L538328-L538332) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538328

Calls written directly in this body: `sessionId.slice`, `sessionId.startsWith`.

SHA-256 of the source span: `23527aa05b68698973addf22702a1cadd9defaef5fec50ba9fc505f542d289a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
