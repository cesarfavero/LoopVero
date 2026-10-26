# `SandAgentDb.seedActivityAsRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718519-718529](../../../../../../../reference/runtime/host-main.cjs#L718519-L718529) | `method` | no | `at3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718519-718529](../../../../../../../reference/runtime/host-main.cjs#L718519-L718529) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:718519

Calls written directly in this body: `this.updateUnreadState`.

SHA-256 of the source span: `3a0fb7f6785d0f62f620d4c69753ec709162ae6b9a7e88a67bf65eac9c68bff7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
