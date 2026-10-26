# `countMessageKinds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649497-649537](../../../../../reference/runtime/host-main.cjs#L649497-L649537) | `FunctionDeclaration` | no | `messages2` |
| [evaluation:441150-441190](../../../../../reference/runtime/sand-eval-runner.cjs#L441150-L441190) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649497-649537](../../../../../reference/runtime/host-main.cjs#L649497-L649537) | 7 | 2 | 0 | 1 | 1 | 0 |
| [evaluation:441150-441190](../../../../../reference/runtime/sand-eval-runner.cjs#L441150-L441190) | 7 | 2 | 0 | 1 | 1 | 0 |

### host:649497

Calls written directly in this body: `Array.isArray`, `String`, `new Error`.

Assignment or increment targets: `assistantMessages`, `systemMessages`, `toolCalls2`, `toolMessages`, `userMessages`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `824a6464f094359d161583a766cda16c3fe3c40ed19005ed8c29413d81becb40`.

### evaluation:441150

Calls written directly in this body: `Array.isArray`, `String`, `new Error`.

Assignment or increment targets: `assistantMessages`, `systemMessages`, `toolCalls3`, `toolMessages`, `userMessages`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `bc3df1d7b3cfc5fc2ad70b664b65186d24342f1aff732520595b64a3149a5356`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
