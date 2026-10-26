# `recordMemoryWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-telemetry/memory-metrics.ts` · [Module README](../../../../../../modules/core/runner/memory-telemetry/memory-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754553-754571](../../../../../../../reference/runtime/host-main.cjs#L754553-L754571) | `FunctionDeclaration` | no | `metrics2, telemetry, report` |
| [evaluation:537504-537522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537504-L537522) | `FunctionDeclaration` | no | `metrics2, telemetry, report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754553-754571](../../../../../../../reference/runtime/host-main.cjs#L754553-L754571) | 1 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:537504-537522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537504-L537522) | 1 | 0 | 0 | 0 | 0 | 1 |

### host:754553

Calls written directly in this body: `errorLogTag`, `process.stderr.write`, `telemetry.reportMemoryWrite`, `write3.increment`, `writeBytes.histogram`.

SHA-256 of the source span: `0a473e361cbbce28478252fece72ddc29e33218cfdc65a8dae248c557780616a`.

### evaluation:537504

Calls written directly in this body: `errorLogTag`, `process.stderr.write`, `telemetry.reportMemoryWrite`, `write.increment`, `writeBytes.histogram`.

SHA-256 of the source span: `a77170115ad66547994e7917d0778da833c7c2c28d6893aa1fd0cc4a8b3ad718`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
