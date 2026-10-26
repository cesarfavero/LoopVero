# `getUnwrappedToolCallName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719698-719701](../../../../../../reference/runtime/host-main.cjs#L719698-L719701) | `FunctionDeclaration` | no | `toolCall2` |
| [evaluation:526174-526177](../../../../../../reference/runtime/sand-eval-runner.cjs#L526174-L526177) | `FunctionDeclaration` | no | `toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719698-719701](../../../../../../reference/runtime/host-main.cjs#L719698-L719701) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526174-526177](../../../../../../reference/runtime/sand-eval-runner.cjs#L526174-L526177) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:719698

Calls written directly in this body: `decodeSandToolActivity`.

SHA-256 of the source span: `47f28f951a7a6f2813800d79e5a26e879dd902c6125a77838821a07e59117ab4`.

### evaluation:526174

Calls written directly in this body: `decodeSandToolActivity`.

SHA-256 of the source span: `47f28f951a7a6f2813800d79e5a26e879dd902c6125a77838821a07e59117ab4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
