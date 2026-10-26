# `createDraftRateLimitRetry/now`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733011-733011](../../../../../../../reference/runtime/host-main.cjs#L733011-L733011) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:540533-540533](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540533-L540533) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733011-733011](../../../../../../../reference/runtime/host-main.cjs#L733011-L733011) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:733011 uses an implicit arrow-function return.
| [evaluation:540533-540533](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540533-L540533) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:540533 uses an implicit arrow-function return.

### host:733011

Calls written directly in this body: `clock.now`.

SHA-256 of the source span: `c9002da4a79102c86c1dae611bb27f0411ba68bbae531c2fefd0a10150c3da92`.

### evaluation:540533

Calls written directly in this body: `clock.now`.

SHA-256 of the source span: `c9002da4a79102c86c1dae611bb27f0411ba68bbae531c2fefd0a10150c3da92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
