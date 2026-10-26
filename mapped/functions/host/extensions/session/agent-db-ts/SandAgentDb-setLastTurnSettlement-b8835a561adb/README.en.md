# `SandAgentDb.setLastTurnSettlement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718587-718589](../../../../../../../reference/runtime/host-main.cjs#L718587-L718589) | `method` | no | `settlement` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718587-718589](../../../../../../../reference/runtime/host-main.cjs#L718587-L718589) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:718587

Calls written directly in this body: `JSON.stringify`, `this.writeKv`.

SHA-256 of the source span: `64bd7e5034a92a11048a4c92f176f56da35b8eb0805e360eb64e422cb6c5e7d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
