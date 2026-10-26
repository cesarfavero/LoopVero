# `SandAgentDb.hasLegacyConversationBlobs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718645-718647](../../../../../../../reference/runtime/host-main.cjs#L718645-L718647) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718645-718647](../../../../../../../reference/runtime/host-main.cjs#L718645-L718647) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718645

Calls written directly in this body: `this.statements.hasLegacyBlob.get`.

SHA-256 of the source span: `ed7ad30b26437afe0024067655e8ab4ed60d0d94cda18a81793359375763230a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
