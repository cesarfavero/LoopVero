# `SandAgentDb.getTranscriptTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718685-718688](../../../../../../../reference/runtime/host-main.cjs#L718685-L718688) | `method` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718685-718688](../../../../../../../reference/runtime/host-main.cjs#L718685-L718688) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:718685

Calls written directly in this body: `readTranscriptTail`.

SHA-256 of the source span: `18c38e7a9483dc5b3dfc510ab7626c7c062452e59ad57667a44e887f7b8da6a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
