# `createBoxSandMcpExec/loadOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684885-684887](../../../../../../reference/runtime/host-main.cjs#L684885-L684887) | `ArrowFunctionExpression` | no | `configJson` |
| [evaluation:514673-514675](../../../../../../reference/runtime/sand-eval-runner.cjs#L514673-L514675) | `ArrowFunctionExpression` | no | `configJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684885-684887](../../../../../../reference/runtime/host-main.cjs#L684885-L684887) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:684885 uses an implicit arrow-function return.
| [evaluation:514673-514675](../../../../../../reference/runtime/sand-eval-runner.cjs#L514673-L514675) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:514673 uses an implicit arrow-function return.

### host:684885

Calls written directly in this body: `options2.removeMissing`.

SHA-256 of the source span: `37262e5f3a0bc4d386a4fd8814eaefceeb124dd67a6d185804a91234a046366f`.

### evaluation:514673

Calls written directly in this body: `options2.removeMissing`.

SHA-256 of the source span: `37262e5f3a0bc4d386a4fd8814eaefceeb124dd67a6d185804a91234a046366f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
