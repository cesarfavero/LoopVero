# `SandAgentDb.getAgentOrigin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718619-718622](../../../../../../../reference/runtime/host-main.cjs#L718619-L718622) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718619-718622](../../../../../../../reference/runtime/host-main.cjs#L718619-L718622) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:718619

Calls written directly in this body: `getSandProfilePath`, `readSandProfileCreationMetadata`, `this.readKv`.

SHA-256 of the source span: `e9e7f07d3106a4d3b2d5b9b76cd61be7fe4f6f827b1468816ff3644be2a33cbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
