# `createSearchEmailThreadsTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/search-email-threads-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765223-765223](../../../../../../../reference/runtime/host-main.cjs#L765223-L765223) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:558591-558591](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558591-L558591) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765223-765223](../../../../../../../reference/runtime/host-main.cjs#L765223-L765223) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:765223 uses an implicit arrow-function return.
| [evaluation:558591-558591](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558591-L558591) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:558591 uses an implicit arrow-function return.

### host:765223

Calls written directly in this body: `searchEmailThreads`.

SHA-256 of the source span: `b1515f69eb0886d1e613a8ffd5b54f273e8e7ca6d056f9df3cda232a003853ad`.

### evaluation:558591

Calls written directly in this body: `searchEmailThreads`.

SHA-256 of the source span: `b1515f69eb0886d1e613a8ffd5b54f273e8e7ca6d056f9df3cda232a003853ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
