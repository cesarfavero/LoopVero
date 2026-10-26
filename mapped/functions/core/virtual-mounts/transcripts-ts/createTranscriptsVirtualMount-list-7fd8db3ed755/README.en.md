# `createTranscriptsVirtualMount/list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766214-766219](../../../../../../reference/runtime/host-main.cjs#L766214-L766219) | `ArrowFunctionExpression` | yes | `_ctx, _access, path33` |
| [evaluation:559578-559583](../../../../../../reference/runtime/sand-eval-runner.cjs#L559578-L559583) | `ArrowFunctionExpression` | yes | `_ctx, _access, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766214-766219](../../../../../../reference/runtime/host-main.cjs#L766214-L766219) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:766214 uses an implicit arrow-function return.
| [evaluation:559578-559583](../../../../../../reference/runtime/sand-eval-runner.cjs#L559578-L559583) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:559578 uses an implicit arrow-function return.

### host:766214

Calls written directly in this body: `refused2`.

SHA-256 of the source span: `56d733edc852da5c207c0f962396a878483f31045aa5d96b554838278b77a704`.

### evaluation:559578

Calls written directly in this body: `refused`.

SHA-256 of the source span: `f7c92c552eeecd46d2fd1620fa2d4e4cedf5c1f86e4b68185c5afbcbe573e3c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
