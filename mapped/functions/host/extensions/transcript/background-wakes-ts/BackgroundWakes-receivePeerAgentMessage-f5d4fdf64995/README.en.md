# `BackgroundWakes.receivePeerAgentMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/background-wakes/README.en.md).

**Module:** `host/extensions/transcript/background-wakes.ts` · [Module README](../../../../../../modules/host/extensions/transcript/background-wakes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734709-734711](../../../../../../../reference/runtime/host-main.cjs#L734709-L734711) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734709-734711](../../../../../../../reference/runtime/host-main.cjs#L734709-L734711) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734709

Calls written directly in this body: `this.agentToAgent.receiveFromPeer`.

SHA-256 of the source span: `7bd7f3c9d738dabc36335f4d7cc2c49267590c25d2a02b23a38f5d7d8597e906`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
