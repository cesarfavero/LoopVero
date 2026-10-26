# `SandAgentDb.getHiddenEntryRepairVersion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718627-718632](../../../../../../../reference/runtime/host-main.cjs#L718627-L718632) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718627-718632](../../../../../../../reference/runtime/host-main.cjs#L718627-L718632) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:718627

Calls written directly in this body: `Number.isFinite`, `Number.parseInt`, `this.readKv`.

SHA-256 of the source span: `10bb468adc5d7fb68c57a50bab0e21c485b97b531743bc389ebb9e0f4e39efc0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
