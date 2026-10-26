# `SandAgentDb.set`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718433-718449](../../../../../../../reference/runtime/host-main.cjs#L718433-L718449) | `method` | no | `key, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718433-718449](../../../../../../../reference/runtime/host-main.cjs#L718433-L718449) | 3 | 0 | 0 | 2 | 1 | 0 |

### host:718433

Calls written directly in this body: `.then`, `new SandCheckpointPublicationError`, `this.notifyBoundary.settled`, `this.readMetadata`, `this.writeMetadata`, `toHex3`.

Explicit throw targets: `SandCheckpointPublicationError`.

SHA-256 of the source span: `6222fba5bb8b49809ba66ba7b5b8abcf2be0e00165cd0db9c0d8be04450888bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
