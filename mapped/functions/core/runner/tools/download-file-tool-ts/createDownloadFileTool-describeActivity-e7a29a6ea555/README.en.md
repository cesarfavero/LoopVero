# `createDownloadFileTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773925-773928](../../../../../../../reference/runtime/host-main.cjs#L773925-L773928) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:573146-573149](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573146-L573149) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773925-773928](../../../../../../../reference/runtime/host-main.cjs#L773925-L773928) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773925 uses an implicit arrow-function return.
| [evaluation:573146-573149](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573146-L573149) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:573146 uses an implicit arrow-function return.

### host:773925

Calls written directly in this body: `import_node_path167.posix.basename`.

SHA-256 of the source span: `a95834c766acba2cda4e25ebea5fdba95320ae9d996e9997822430f6c914eda7`.

### evaluation:573146

Calls written directly in this body: `import_node_path38.posix.basename`.

SHA-256 of the source span: `2289dc7e1440b7f1dcf1a8de73e48cfc742b3655b8f74be8ac9292d2ddfea2eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
