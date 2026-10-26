# `SandAgentDb.legacyConversationBlobBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718648-718653](../../../../../../../reference/runtime/host-main.cjs#L718648-L718653) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718648-718653](../../../../../../../reference/runtime/host-main.cjs#L718648-L718653) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:718648

Calls written directly in this body: `Number`, `Number.isFinite`, `this.statements.legacyBlobBytes.get`.

SHA-256 of the source span: `f959f03582957718fa9a2d8b6b3e8ef21024140dab20ff35599c2df4ba9d4b83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
