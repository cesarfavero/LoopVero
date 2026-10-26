# `createSandLoopDetectionPolicy/onDetection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483454-483467](../../../../../../reference/runtime/sand-eval-runner.cjs#L483454-L483467) | `ArrowFunctionExpression` | no | `observation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483454-483467](../../../../../../reference/runtime/sand-eval-runner.cjs#L483454-L483467) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:483454

Calls written directly in this body: `.join`, `detectionByFingerprint.set`, `inputs.report`, `projectLoopObservation`, `seen.add`, `seen.has`.

Assignment or increment targets: `emitted`.

SHA-256 of the source span: `6111a949a43c8a38090e17000ec2a22f2565ec4d8e1563511a76a8e799264eb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
