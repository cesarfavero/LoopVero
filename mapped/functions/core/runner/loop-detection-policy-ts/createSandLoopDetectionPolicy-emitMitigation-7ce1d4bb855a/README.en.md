# `createSandLoopDetectionPolicy/emitMitigation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483437-483451](../../../../../../reference/runtime/sand-eval-runner.cjs#L483437-L483451) | `ArrowFunctionExpression` | no | `observation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483437-483451](../../../../../../reference/runtime/sand-eval-runner.cjs#L483437-L483451) | 2 | 0 | 0 | 1 | 0 | 1 |

### evaluation:483437

Calls written directly in this body: `detectionByFingerprint.get`, `errorLogTag`, `projectLoopMitigationObservation`, `reportHostDiagnostic`, `reportMitigation`.

SHA-256 of the source span: `f2c6ef8b1efc8b9646d3feb89b81c16edaee2bb7c115295c09426d20c17b4cf3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
