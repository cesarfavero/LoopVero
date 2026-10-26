# `typedInTheChat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/written-messages.ts` · [Module README](../../../../../modules/shared/voice-call/written-messages-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490562-490568](../../../../../../reference/runtime/host-main.cjs#L490562-L490568) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490562-490568](../../../../../../reference/runtime/host-main.cjs#L490562-L490568) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:490562

Calls written directly in this body: `entry.content.trim`.

SHA-256 of the source span: `82f03e659a855bbb217228c920beeea434240de24a24126d521a47ac5d83a5b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
