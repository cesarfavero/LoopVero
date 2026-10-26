# `recordMemoryRecall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-telemetry/memory-metrics.ts` · [Module README](../../../../../../modules/core/runner/memory-telemetry/memory-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754580-754590](../../../../../../../reference/runtime/host-main.cjs#L754580-L754590) | `FunctionDeclaration` | no | `ctx, report` |
| [evaluation:537548-537558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537548-L537558) | `FunctionDeclaration` | no | `ctx, report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754580-754590](../../../../../../../reference/runtime/host-main.cjs#L754580-L754590) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:537548-537558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537548-L537558) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:754580

Calls written directly in this body: `String`, `errorLogTag`, `process.stderr.write`, `recall.increment`.

SHA-256 of the source span: `dd82cb798d17ff17a0a6c583d15e719981cc60c315362635971033eb5bcc7997`.

### evaluation:537548

Calls written directly in this body: `String`, `errorLogTag`, `process.stderr.write`, `recall.increment`.

SHA-256 of the source span: `994847c620d62991b475c732ba6a44d85a286653a2d7507c87290739a45a93bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
