# `redactCodeLines/endRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767678-767681](../../../../../../../../reference/runtime/host-main.cjs#L767678-L767681) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:563195-563198](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563195-L563198) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767678-767681](../../../../../../../../reference/runtime/host-main.cjs#L767678-L767681) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:563195-563198](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563195-L563198) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:767678

Calls written directly in this body: `redactCodeRun`.

Assignment or increment targets: `run`.

SHA-256 of the source span: `65b70048254e6340b2675e0413b6b6a89573ce6b24cfeeb0def1de0915041caf`.

### evaluation:563195

Calls written directly in this body: `redactCodeRun`.

Assignment or increment targets: `run`.

SHA-256 of the source span: `65b70048254e6340b2675e0413b6b6a89573ce6b24cfeeb0def1de0915041caf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
