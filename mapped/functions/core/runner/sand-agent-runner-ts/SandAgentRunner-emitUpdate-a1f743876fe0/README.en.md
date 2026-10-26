# `_SandAgentRunner.emitUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594039-594054](../../../../../../reference/runtime/sand-eval-runner.cjs#L594039-L594054) | `method` | no | `update, updateObservers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594039-594054](../../../../../../reference/runtime/sand-eval-runner.cjs#L594039-L594054) | 4 | 0 | 0 | 0 | 0 | 0 |

### evaluation:594039

Calls written directly in this body: `this.computerUse.recordTurnEnded`, `this.observation.recordToolActivity`, `this.transport.lastReactionApplied`, `this.transport.onUpdate`, `updateObservers.noteDelivered`, `updateObservers.noteReactionApplied`, `updateObservers.noteUpdate`.

SHA-256 of the source span: `f4407b187161f1eac9a13549be43e72d80c36851641068c70029949620b24e13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
