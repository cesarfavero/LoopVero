# `<callback>/<callback>/fail3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649457-649460](../../../../../reference/runtime/host-main.cjs#L649457-L649460) | `FunctionDeclaration` | no | `e` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649457-649460](../../../../../reference/runtime/host-main.cjs#L649457-L649460) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:649457

Calls written directly in this body: `new SuppressedError2`.

Assignment or increment targets: `env.error`, `env.hasError`.

SHA-256 of the source span: `c2293a0fefe7d4175ec44cc645b32711a2b7f7a77d5e604dfb52114e82c3480a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
