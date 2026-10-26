# `MutableGateProperty.set`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/gate-property.ts` · [Module README](../../../../../../modules/shared/node/experiments/gate-property-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552262-552275](../../../../../../../reference/runtime/host-main.cjs#L552262-L552275) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552262-552275](../../../../../../../reference/runtime/host-main.cjs#L552262-L552275) | 1 | 1 | 0 | 1 | 0 | 1 |

### host:552262

Calls written directly in this body: `errorLogTag`, `listener`, `reportExperimentsDiagnostic`.

Assignment or increment targets: `this.value`.

SHA-256 of the source span: `cde27f7639d5c9969530ff9fbb267e50598b92a1b6a940b2c199e5b338d6f218`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
