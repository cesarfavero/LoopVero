# `describeParamIncompatibilities/coOccurs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/model-catalog.ts` · [Module README](../../../../../modules/shared/agents/model-catalog-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567620-567623](../../../../../../reference/runtime/sand-eval-runner.cjs#L567620-L567623) | `ArrowFunctionExpression` | no | `a, b2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567620-567623](../../../../../../reference/runtime/sand-eval-runner.cjs#L567620-L567623) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:567620 uses an implicit arrow-function return.

### evaluation:567620

Calls written directly in this body: `entry.variants.some`.

SHA-256 of the source span: `0e1b5381444799c67ecb03097725231c2e646af57c90a0b271773811d92ec096`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
