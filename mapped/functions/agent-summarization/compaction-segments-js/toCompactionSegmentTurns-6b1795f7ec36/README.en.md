# `toCompactionSegmentTurns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616806-616828](../../../../../reference/runtime/host-main.cjs#L616806-L616828) | `FunctionDeclaration` | no | `messages2` |
| [evaluation:285346-285368](../../../../../reference/runtime/sand-eval-runner.cjs#L285346-L285368) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616806-616828](../../../../../reference/runtime/host-main.cjs#L616806-L616828) | 4 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:285346-285368](../../../../../reference/runtime/sand-eval-runner.cjs#L285346-L285368) | 4 | 2 | 0 | 1 | 0 | 0 |

### host:616806

Calls written directly in this body: `assistantTurn`, `fromRedactedCoreMessage`, `toolResultText`, `turns.push`, `userText`.

SHA-256 of the source span: `5a367565f5891feb9ec6fc631488b972ebd01d753dfb715a93dc5669933540b8`.

### evaluation:285346

Calls written directly in this body: `assistantTurn`, `fromRedactedCoreMessage`, `toolResultText`, `turns.push`, `userText`.

SHA-256 of the source span: `bd2a3c1f6926914321ac8506315f2cf54fc2586d8371f34b876897b2253fda83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
