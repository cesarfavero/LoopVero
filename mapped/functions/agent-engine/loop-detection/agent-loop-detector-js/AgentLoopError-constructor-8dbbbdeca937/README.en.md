# `AgentLoopError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624579-624600](../../../../../../reference/runtime/host-main.cjs#L624579-L624600) | `method` | no | `options2` |
| [evaluation:310711-310732](../../../../../../reference/runtime/sand-eval-runner.cjs#L310711-L310732) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624579-624600](../../../../../../reference/runtime/host-main.cjs#L624579-L624600) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310711-310732](../../../../../../reference/runtime/sand-eval-runner.cjs#L310711-L310732) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:624579

Calls written directly in this body: `new CustomErrorDetails`, `new ErrorDetails`, `singleMessageLoopWireInfo`, `super`.

Assignment or increment targets: `this.evidenceFingerprint`, `this.loopType`, `this.name`, `this.period`, `this.repetitions`, `this.singleMessageLoopKind`.

SHA-256 of the source span: `6fef0abbe78b2e10288a2c9fe9132c5a221490109315a3a13aae6cbd7ae2b43c`.

### evaluation:310711

Calls written directly in this body: `new CustomErrorDetails`, `new ErrorDetails`, `singleMessageLoopWireInfo`, `super`.

Assignment or increment targets: `this.evidenceFingerprint`, `this.loopType`, `this.name`, `this.period`, `this.repetitions`, `this.singleMessageLoopKind`.

SHA-256 of the source span: `6fef0abbe78b2e10288a2c9fe9132c5a221490109315a3a13aae6cbd7ae2b43c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
