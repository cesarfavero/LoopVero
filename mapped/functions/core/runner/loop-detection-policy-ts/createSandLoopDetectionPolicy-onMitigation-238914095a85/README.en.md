# `createSandLoopDetectionPolicy/onMitigation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483468-483504](../../../../../../reference/runtime/sand-eval-runner.cjs#L483468-L483504) | `ArrowFunctionExpression` | no | `observation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483468-483504](../../../../../../reference/runtime/sand-eval-runner.cjs#L483468-L483504) | 9 | 0 | 0 | 6 | 0 | 0 |

### evaluation:483468

Calls written directly in this body: `closedMitigations.add`, `closedMitigations.has`, `detectionByFingerprint.get`, `emitMitigation`, `new AgentLoopError`, `openMitigations.delete`, `openMitigations.has`, `openMitigations.set`, `remindedThisTurn.add`, `remindedThisTurn.has`, `stopOnRepeatTrip.stop`.

Assignment or increment targets: `mitigationsEmitted`.

SHA-256 of the source span: `9900158820d3ab2f8a6531d7baab24a4d78cd1bda6a22bfa1bf67f849a0c264d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
