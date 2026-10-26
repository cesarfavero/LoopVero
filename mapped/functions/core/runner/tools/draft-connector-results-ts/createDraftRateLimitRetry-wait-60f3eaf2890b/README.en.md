# `createDraftRateLimitRetry/wait`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733012-733012](../../../../../../../reference/runtime/host-main.cjs#L733012-L733012) | `ArrowFunctionExpression` | no | `{ attempt, minimumMs, signal }` |
| [evaluation:540534-540534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540534-L540534) | `ArrowFunctionExpression` | no | `{ attempt, minimumMs, signal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733012-733012](../../../../../../../reference/runtime/host-main.cjs#L733012-L733012) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:733012 uses an implicit arrow-function return.
| [evaluation:540534-540534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540534-L540534) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:540534 uses an implicit arrow-function return.

### host:733012

Calls written directly in this body: `policy.schedule`.

SHA-256 of the source span: `56e630fc09f1b248b85358fa04300b24b9e3d49f35bad2e0ab46f8de8e01d442`.

### evaluation:540534

Calls written directly in this body: `policy.schedule`.

SHA-256 of the source span: `56e630fc09f1b248b85358fa04300b24b9e3d49f35bad2e0ab46f8de8e01d442`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
