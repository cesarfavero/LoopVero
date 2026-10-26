# `fromBase642`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647793-647795](../../../../../reference/runtime/host-main.cjs#L647793-L647795) | `FunctionDeclaration` | no | `b64` |
| [evaluation:439450-439452](../../../../../reference/runtime/sand-eval-runner.cjs#L439450-L439452) | `FunctionDeclaration` | no | `b64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647793-647795](../../../../../reference/runtime/host-main.cjs#L647793-L647795) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439450-439452](../../../../../reference/runtime/sand-eval-runner.cjs#L439450-L439452) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:647793

Calls written directly in this body: `Buffer.from`, `new Uint8Array`.

SHA-256 of the source span: `10c983a35fad8768cf5a59a44df72552c62871b259aafd505c4f82c910900fef`.

### evaluation:439450

Calls written directly in this body: `Buffer.from`, `new Uint8Array`.

SHA-256 of the source span: `10c983a35fad8768cf5a59a44df72552c62871b259aafd505c4f82c910900fef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
