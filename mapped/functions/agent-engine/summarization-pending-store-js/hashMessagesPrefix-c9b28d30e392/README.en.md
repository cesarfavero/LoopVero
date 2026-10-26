# `hashMessagesPrefix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647796-647807](../../../../../reference/runtime/host-main.cjs#L647796-L647807) | `FunctionDeclaration` | yes | `privacyMode, messages2` |
| [evaluation:439453-439464](../../../../../reference/runtime/sand-eval-runner.cjs#L439453-L439464) | `FunctionDeclaration` | yes | `privacyMode, messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647796-647807](../../../../../reference/runtime/host-main.cjs#L647796-L647807) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:439453-439464](../../../../../reference/runtime/sand-eval-runner.cjs#L439453-L439464) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:647796

Calls written directly in this body: `Buffer.allocUnsafe`, `createRedactedCoreMessageSerde`, `hash2.digest`, `hash2.update`, `lengthPrefix.writeUInt32BE`, `serde.serialize`.

SHA-256 of the source span: `0a2ad7d40b0a8ccd0eb39702ae7d4a50f6b7abc7439034178e51717c4317c764`.

### evaluation:439453

Calls written directly in this body: `Buffer.allocUnsafe`, `createRedactedCoreMessageSerde`, `hash2.digest`, `hash2.update`, `lengthPrefix.writeUInt32BE`, `serde.serialize`.

SHA-256 of the source span: `d78fc579eb19e574a7092278d4eaa3b4dd517f42d0b0c7096afe3ef2a1be9deb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
