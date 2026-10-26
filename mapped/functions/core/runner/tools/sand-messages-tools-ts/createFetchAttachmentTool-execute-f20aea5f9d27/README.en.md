# `createFetchAttachmentTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778227-778227](../../../../../../../reference/runtime/host-main.cjs#L778227-L778227) | `ArrowFunctionExpression` | no | `ctx, args, tools` |
| [evaluation:577962-577962](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577962-L577962) | `ArrowFunctionExpression` | no | `ctx, args, tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778227-778227](../../../../../../../reference/runtime/host-main.cjs#L778227-L778227) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:778227 uses an implicit arrow-function return.
| [evaluation:577962-577962](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577962-L577962) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:577962 uses an implicit arrow-function return.

### host:778227

Calls written directly in this body: `fetchAttachment`.

SHA-256 of the source span: `4485f514954c5de771b921fe5344a08db7b3377d36f2c7bc0ba1d7f771ac4578`.

### evaluation:577962

Calls written directly in this body: `fetchAttachment`.

SHA-256 of the source span: `4485f514954c5de771b921fe5344a08db7b3377d36f2c7bc0ba1d7f771ac4578`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
