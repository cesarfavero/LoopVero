# `SandAgentDb.setPromptPrefixSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718906-718908](../../../../../../../reference/runtime/host-main.cjs#L718906-L718908) | `method` | no | `snapshot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718906-718908](../../../../../../../reference/runtime/host-main.cjs#L718906-L718908) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:718906

Calls written directly in this body: `JSON.stringify`, `this.writeKv`.

SHA-256 of the source span: `0fd1fcd066da300d5cc35e127425b2875a1ed3dd4e170af926347a0b347fb12d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
