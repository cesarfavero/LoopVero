# `SandAgentDb.deleteKv`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718416-718418](../../../../../../../reference/runtime/host-main.cjs#L718416-L718418) | `method` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718416-718418](../../../../../../../reference/runtime/host-main.cjs#L718416-L718418) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:718416

Calls written directly in this body: `this.runWrite`.

SHA-256 of the source span: `95dabe794e0fa8a03952337bc674c5c5d0345f51eb901c4b7451f2038c0cb750`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
