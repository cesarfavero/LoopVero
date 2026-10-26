# `outlineItemTimes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719871-719885](../../../../../../../reference/runtime/host-main.cjs#L719871-L719885) | `FunctionDeclaration` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719871-719885](../../../../../../../reference/runtime/host-main.cjs#L719871-L719885) | 4 | 2 | 0 | 1 | 0 | 0 |

### host:719871

Calls written directly in this body: `durableTimeMs`, `new Map`, `state.turns.entries`, `steps.entries`, `times.set`.

SHA-256 of the source span: `46754f4b7aa8da6d4d455ed9af09a5560dfc63c3b24110af64238f06d06e722e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
