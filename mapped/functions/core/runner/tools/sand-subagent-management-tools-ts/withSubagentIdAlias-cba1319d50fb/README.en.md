# `withSubagentIdAlias`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780900-780900](../../../../../../../reference/runtime/host-main.cjs#L780900-L780900) | `ArrowFunctionExpression` | no | `schema3` |
| [evaluation:581247-581247](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581247-L581247) | `ArrowFunctionExpression` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780900-780900](../../../../../../../reference/runtime/host-main.cjs#L780900-L780900) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:780900 uses an implicit arrow-function return.
| [evaluation:581247-581247](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581247-L581247) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581247 uses an implicit arrow-function return.

### host:780900

Calls written directly in this body: `external_exports2.preprocess`.

SHA-256 of the source span: `53779d8113b2edb0579408b4686b40ee6206304884eef298dc72a34b5f6a782c`.

### evaluation:581247

Calls written directly in this body: `external_exports3.preprocess`.

SHA-256 of the source span: `ac778c11ac8db4884fed49c72545c29e6a87d3540ebcdae84d844f29f6776de0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
