# `fenceBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-notification-text.ts` · [Module README](../../../../../modules/shared/media/markdown-notification-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722289-722293](../../../../../../reference/runtime/host-main.cjs#L722289-L722293) | `FunctionDeclaration` | no | `block` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722289-722293](../../../../../../reference/runtime/host-main.cjs#L722289-L722293) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722289

Calls written directly in this body: `.slice`, `FENCE_CLOSE_PATTERN.test`, `block.split`, `lines2.at`, `lines2.join`, `lines2.pop`.

SHA-256 of the source span: `ec9956e5247c47a36ce97cdaf08832dc7e42ffaa5bcda84c6c03a067e6da1892`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
