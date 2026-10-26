# `deriveOutlineFromConversationState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719836-719838](../../../../../../reference/runtime/host-main.cjs#L719836-L719838) | `FunctionDeclaration` | no | `state` |
| [evaluation:526349-526351](../../../../../../reference/runtime/sand-eval-runner.cjs#L526349-L526351) | `FunctionDeclaration` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719836-719838](../../../../../../reference/runtime/host-main.cjs#L719836-L719838) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526349-526351](../../../../../../reference/runtime/sand-eval-runner.cjs#L526349-L526351) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719836

Calls written directly in this body: `.flatMap`, `deriveOutlineTurnsFromConversationState`.

SHA-256 of the source span: `636dd8eb1408a272d4b9d27a1c9e76c20b39d3432afd232fa262e8432e85563e`.

### evaluation:526349

Calls written directly in this body: `.flatMap`, `deriveOutlineTurnsFromConversationState`.

SHA-256 of the source span: `636dd8eb1408a272d4b9d27a1c9e76c20b39d3432afd232fa262e8432e85563e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
