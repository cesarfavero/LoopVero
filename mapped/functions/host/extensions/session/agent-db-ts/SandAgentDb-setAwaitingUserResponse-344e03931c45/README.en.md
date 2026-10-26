# `SandAgentDb.setAwaitingUserResponse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718607-718618](../../../../../../../reference/runtime/host-main.cjs#L718607-L718618) | `method` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718607-718618](../../../../../../../reference/runtime/host-main.cjs#L718607-L718618) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:718607

Calls written directly in this body: `JSON.stringify`, `this.deleteKv`, `this.getAwaitingUserResponse`, `this.writeKv`.

SHA-256 of the source span: `a3ea9815eb0d6574f6aebc91afad101ad61b7db6ebf1377b8df1a2fbbc291d85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
