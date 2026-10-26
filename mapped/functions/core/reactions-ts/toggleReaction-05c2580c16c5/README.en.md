# `toggleReaction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/reactions.ts` · [Module README](../../../../modules/core/reactions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739401-739407](../../../../../reference/runtime/host-main.cjs#L739401-L739407) | `FunctionDeclaration` | no | `reactions, emoji3, by, stamp` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739401-739407](../../../../../reference/runtime/host-main.cjs#L739401-L739407) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:739401

Calls written directly in this body: `current2.filter`, `isCurrentReaction`.

SHA-256 of the source span: `544852ab6a7c8fb477f1d24dd049e19beb70c9cebef87cb8d16b3b58c0e90aae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
