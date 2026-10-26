# `_SandAgentRunner.onSummaryLifecycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594094-594096](../../../../../../reference/runtime/sand-eval-runner.cjs#L594094-L594096) | `method` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594094-594096](../../../../../../reference/runtime/sand-eval-runner.cjs#L594094-L594096) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:594094

Calls written directly in this body: `this.summaryLifecycle.listen`.

SHA-256 of the source span: `b42d5058090fbe35458c489dfd8d7d33824d61ea7fb79c1bece1f730ce497429`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
