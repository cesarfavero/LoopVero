# `deriveOutlineTurnsFromConversationState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719792-719835](../../../../../../reference/runtime/host-main.cjs#L719792-L719835) | `FunctionDeclaration` | no | `state` |
| [evaluation:526305-526348](../../../../../../reference/runtime/sand-eval-runner.cjs#L526305-L526348) | `FunctionDeclaration` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719792-719835](../../../../../../reference/runtime/host-main.cjs#L719792-L719835) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526305-526348](../../../../../../reference/runtime/sand-eval-runner.cjs#L526305-L526348) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719792

Calls written directly in this body: `state.turns.forEach`.

SHA-256 of the source span: `08104e464594657c2a01b2bc6fcdceea7d7f12fa73f8610c5d78b4de621e91a9`.

### evaluation:526305

Calls written directly in this body: `state.turns.forEach`.

SHA-256 of the source span: `08104e464594657c2a01b2bc6fcdceea7d7f12fa73f8610c5d78b4de621e91a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
