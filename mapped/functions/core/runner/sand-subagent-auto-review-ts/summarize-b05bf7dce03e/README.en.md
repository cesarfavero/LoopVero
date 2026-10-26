# `summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/sand-subagent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780817-780817](../../../../../../reference/runtime/host-main.cjs#L780817-L780817) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:581165-581165](../../../../../../reference/runtime/sand-eval-runner.cjs#L581165-L581165) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780817-780817](../../../../../../reference/runtime/host-main.cjs#L780817-L780817) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:780817 uses an implicit arrow-function return.
| [evaluation:581165-581165](../../../../../../reference/runtime/sand-eval-runner.cjs#L581165-L581165) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581165 uses an implicit arrow-function return.

### host:780817

Calls written directly in this body: `summarizeSandSubagentAction`.

SHA-256 of the source span: `2aa1157347877d58f6c435636097bcf04762ab2952d4ad77d8d2be72fdfde22b`.

### evaluation:581165

Calls written directly in this body: `summarizeSandSubagentAction`.

SHA-256 of the source span: `2aa1157347877d58f6c435636097bcf04762ab2952d4ad77d8d2be72fdfde22b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
