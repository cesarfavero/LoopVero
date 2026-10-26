# `_SandAgentRunner.constructor/skills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592827-592827](../../../../../../reference/runtime/sand-eval-runner.cjs#L592827-L592827) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:593331-593333](../../../../../../reference/runtime/sand-eval-runner.cjs#L593331-L593333) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592827-592827](../../../../../../reference/runtime/sand-eval-runner.cjs#L592827-L592827) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:592827 uses an implicit arrow-function return.
| [evaluation:593331-593333](../../../../../../reference/runtime/sand-eval-runner.cjs#L593331-L593333) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:592827

Calls written directly in this body: `this.skillStore.list`.

SHA-256 of the source span: `0c836c8523a2bfff7764dffee77ff41faae19e8ddb68aca2c9ecb55f991445ad`.

### evaluation:593331

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `21446a5f510ca21c62d8c5dc32d6bd946b81dc3234aa71938ec7f0e741b98e7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
