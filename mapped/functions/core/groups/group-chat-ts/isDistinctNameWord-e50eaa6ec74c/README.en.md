# `isDistinctNameWord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491320-491322](../../../../../../reference/runtime/host-main.cjs#L491320-L491322) | `FunctionDeclaration` | no | `word` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491320-491322](../../../../../../reference/runtime/host-main.cjs#L491320-L491322) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491320

Calls written directly in this body: `GENERIC_NAME_WORDS.has`.

SHA-256 of the source span: `caa537190f5720b547fe504d328b6ae03afce446048cad5c8c62790f0d9d6b0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
