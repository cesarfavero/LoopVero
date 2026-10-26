# `fingerprintAgentLoopEvidence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624542-624550](../../../../../../reference/runtime/host-main.cjs#L624542-L624550) | `FunctionDeclaration` | no | `loopKind, evidenceParts` |
| [evaluation:310664-310672](../../../../../../reference/runtime/sand-eval-runner.cjs#L310664-L310672) | `FunctionDeclaration` | no | `loopKind, evidenceParts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624542-624550](../../../../../../reference/runtime/host-main.cjs#L624542-L624550) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:310664-310672](../../../../../../reference/runtime/sand-eval-runner.cjs#L310664-L310672) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:624542

Calls written directly in this body: `Buffer.byteLength`, `hash2.digest`, `hash2.update`.

SHA-256 of the source span: `fd2304fef018cf349f9f6d3de66bcce970aeed408e590d9509ab6314459f400c`.

### evaluation:310664

Calls written directly in this body: `Buffer.byteLength`, `hash2.digest`, `hash2.update`.

SHA-256 of the source span: `39de7692acc59d7edb9dea70bd660e100b7a5499768f1d73b31c49370cbfb995`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
