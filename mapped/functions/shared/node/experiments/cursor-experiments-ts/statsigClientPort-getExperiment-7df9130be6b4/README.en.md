# `statsigClientPort/getExperiment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552574-552577](../../../../../../../reference/runtime/host-main.cjs#L552574-L552577) | `ArrowFunctionExpression` | no | `name18, parse17, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552574-552577](../../../../../../../reference/runtime/host-main.cjs#L552574-L552577) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:552574

Calls written directly in this body: `client.getExperiment`, `parse17`.

SHA-256 of the source span: `179d72f62560c6deff471330a4ed5ff3753a3f0cdf9a8b97d8ce4dd06c74efa3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
