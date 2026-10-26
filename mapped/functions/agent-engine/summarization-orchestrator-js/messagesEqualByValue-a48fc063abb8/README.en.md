# `messagesEqualByValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649546-649554](../../../../../reference/runtime/host-main.cjs#L649546-L649554) | `FunctionDeclaration` | no | `storedMessage, liveMessage` |
| [evaluation:441199-441207](../../../../../reference/runtime/sand-eval-runner.cjs#L441199-L441207) | `FunctionDeclaration` | no | `storedMessage, liveMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649546-649554](../../../../../reference/runtime/host-main.cjs#L649546-L649554) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:441199-441207](../../../../../reference/runtime/sand-eval-runner.cjs#L441199-L441207) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:649546

Calls written directly in this body: `coreMessageJson`, `fromRedactedCoreMessage`.

SHA-256 of the source span: `2a8570aa983a0d8602505292cd3ab7401eed0e65de7375b5685b4b38d194b7f4`.

### evaluation:441199

Calls written directly in this body: `coreMessageJson`, `fromRedactedCoreMessage`.

SHA-256 of the source span: `2a8570aa983a0d8602505292cd3ab7401eed0e65de7375b5685b4b38d194b7f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
