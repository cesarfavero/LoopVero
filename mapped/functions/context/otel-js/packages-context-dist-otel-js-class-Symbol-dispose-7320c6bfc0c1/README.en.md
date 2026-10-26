# `../packages/context/dist/otel.js/<class>.Symbol.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225888-225892](../../../../../reference/runtime/host-main.cjs#L225888-L225892) | `method` | no | `(none)` |
| [evaluation:2402-2406](../../../../../reference/runtime/sand-eval-runner.cjs#L2402-L2406) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225888-225892](../../../../../reference/runtime/host-main.cjs#L225888-L225892) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2402-2406](../../../../../reference/runtime/sand-eval-runner.cjs#L2402-L2406) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:225888

Calls written directly in this body: `this.span.end`.

SHA-256 of the source span: `25c60a208a56abd283ee181d06b258d50257265069c491dc820202e0b553f151`.

### evaluation:2402

Calls written directly in this body: `this.span.end`.

SHA-256 of the source span: `25c60a208a56abd283ee181d06b258d50257265069c491dc820202e0b553f151`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
