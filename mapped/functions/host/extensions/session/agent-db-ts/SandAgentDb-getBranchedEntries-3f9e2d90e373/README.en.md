# `SandAgentDb.getBranchedEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718704-718707](../../../../../../../reference/runtime/host-main.cjs#L718704-L718707) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718704-718707](../../../../../../../reference/runtime/host-main.cjs#L718704-L718707) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:718704

Calls written directly in this body: `parseEntryRows`, `this.statements.listBranchedEntries.all`.

SHA-256 of the source span: `b3537c98258ccc05a06fe08bd87de865a30d63831a86c817391410c64d5284db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
