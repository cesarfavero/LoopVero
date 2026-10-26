# `toBase642`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647790-647792](../../../../../reference/runtime/host-main.cjs#L647790-L647792) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:439447-439449](../../../../../reference/runtime/sand-eval-runner.cjs#L439447-L439449) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647790-647792](../../../../../reference/runtime/host-main.cjs#L647790-L647792) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439447-439449](../../../../../reference/runtime/sand-eval-runner.cjs#L439447-L439449) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:647790

Calls written directly in this body: `.toString`, `Buffer.from`.

SHA-256 of the source span: `60fed149a4c7a5c1f02fdaf4579aa9c769399ea94026824e44e5bb605c227472`.

### evaluation:439447

Calls written directly in this body: `.toString`, `Buffer.from`.

SHA-256 of the source span: `60fed149a4c7a5c1f02fdaf4579aa9c769399ea94026824e44e5bb605c227472`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
