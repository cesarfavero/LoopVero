# `SandAgentDb.setAgentProfilePromptSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718919-718921](../../../../../../../reference/runtime/host-main.cjs#L718919-L718921) | `method` | no | `snapshot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718919-718921](../../../../../../../reference/runtime/host-main.cjs#L718919-L718921) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:718919

Calls written directly in this body: `JSON.stringify`, `this.writeKv`.

SHA-256 of the source span: `dbf6a46c5cc0785e3b9e5c5281f44be2edb4f931f00e90a6a464afc7c7265176`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
