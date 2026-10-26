# `memoryFactBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-telemetry/memory-metrics.ts` · [Module README](../../../../../../modules/core/runner/memory-telemetry/memory-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754550-754552](../../../../../../../reference/runtime/host-main.cjs#L754550-L754552) | `FunctionDeclaration` | no | `fact` |
| [evaluation:537501-537503](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537501-L537503) | `FunctionDeclaration` | no | `fact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754550-754552](../../../../../../../reference/runtime/host-main.cjs#L754550-L754552) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537501-537503](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537501-L537503) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754550

Calls written directly in this body: `.encode`, `new TextEncoder`.

SHA-256 of the source span: `ac4816bfd7dc13ade429bc183ac04308f5ae3290eea061e0b0a71529eb504d4c`.

### evaluation:537501

Calls written directly in this body: `.encode`, `new TextEncoder`.

SHA-256 of the source span: `ac4816bfd7dc13ade429bc183ac04308f5ae3290eea061e0b0a71529eb504d4c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
