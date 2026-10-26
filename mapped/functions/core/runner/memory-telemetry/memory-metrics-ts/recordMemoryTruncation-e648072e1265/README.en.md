# `recordMemoryTruncation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-telemetry/memory-metrics.ts` · [Module README](../../../../../../modules/core/runner/memory-telemetry/memory-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537528-537543](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537528-L537543) | `FunctionDeclaration` | no | `ctx, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537528-537543](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537528-L537543) | 1 | 2 | 0 | 0 | 0 | 1 |

### evaluation:537528

Calls written directly in this body: `Math.max`, `errorLogTag`, `facts`, `process.stderr.write`, `shown[computed].filter`, `total[computed].filter`, `truncatedPct.histogram`.

SHA-256 of the source span: `6ce2c11d521594281eff437e7ad8e0e3306dae088f46dd5e926c84c4acdb6fda`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
