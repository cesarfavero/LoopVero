# `SandAgentDb.getLastTurnSettlement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718584-718586](../../../../../../../reference/runtime/host-main.cjs#L718584-L718586) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718584-718586](../../../../../../../reference/runtime/host-main.cjs#L718584-L718586) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718584

Calls written directly in this body: `parseTurnSettlement`, `this.readKv`.

SHA-256 of the source span: `1f9dd982124b8aa2ce389ba933910d496b17074ec5d5d4eea93877d22c258fdb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
