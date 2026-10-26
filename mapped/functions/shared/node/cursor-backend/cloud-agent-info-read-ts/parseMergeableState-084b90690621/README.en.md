# `parseMergeableState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508485-508492](../../../../../../../reference/runtime/host-main.cjs#L508485-L508492) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508485-508492](../../../../../../../reference/runtime/host-main.cjs#L508485-L508492) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:508485

Calls written directly in this body: `.toLowerCase`, `isMergeableState`, `raw.trim`.

SHA-256 of the source span: `834e99925b2b935081c2eba52a3bf2510c462ebbd16947d137e5a8abca8ced5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
