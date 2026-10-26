# `SandExperimentOverrideStore.setParam`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/experiment-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/experiment-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552049-552057](../../../../../../../reference/runtime/host-main.cjs#L552049-L552057) | `method` | no | `{     experiment,     param,     value   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552049-552057](../../../../../../../reference/runtime/host-main.cjs#L552049-L552057) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:552049

Calls written directly in this body: `this.isExperimentName`, `this.overrides.get`, `this.overrides.set`.

SHA-256 of the source span: `b5cc7f3481d4aded2154983fc4cb904c48cd97f6ca86b4d78cd907033789ec62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
