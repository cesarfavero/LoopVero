# `SandAgentDb.clearConversation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718936-718977](../../../../../../../reference/runtime/host-main.cjs#L718936-L718977) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718936-718977](../../../../../../../reference/runtime/host-main.cjs#L718936-L718977) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:718936

Calls written directly in this body: `.then`, `publishTranscriptMutation`, `this.notifyBoundary.settled`, `this.readMetadata`, `this.runWrite`.

SHA-256 of the source span: `8e586b9a37bf50c2408f02e75b619286ec2aeaf037e3208a85dcf4e64e209667`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
