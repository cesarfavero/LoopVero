# `getBlobId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-store.js` · [Module README](../../../../modules/agent-kv/blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615944-615947](../../../../../reference/runtime/host-main.cjs#L615944-L615947) | `FunctionDeclaration` | yes | `blobData` |
| [evaluation:284729-284732](../../../../../reference/runtime/sand-eval-runner.cjs#L284729-L284732) | `FunctionDeclaration` | yes | `blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615944-615947](../../../../../reference/runtime/host-main.cjs#L615944-L615947) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284729-284732](../../../../../reference/runtime/sand-eval-runner.cjs#L284729-L284732) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:615944

Calls written directly in this body: `crypto.subtle.digest`, `new Uint8Array`, `toUint8Array2`.

SHA-256 of the source span: `7aaa7a633509d81777269cc9ca7d4612dbff2889f67b34aa38bc3353280b559c`.

### evaluation:284729

Calls written directly in this body: `crypto.subtle.digest`, `new Uint8Array`, `toUint8Array`.

SHA-256 of the source span: `42de339abc5d25bfbdae253d2ccfbc3bf6ff4ad95c5366ca5cf25c65d4f8a99a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
