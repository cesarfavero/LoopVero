# `build/prepareDownload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/account-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/account-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775486-775486](../../../../../../../../reference/runtime/host-main.cjs#L775486-L775486) | `ArrowFunctionExpression` | no | `request5` |
| [evaluation:575131-575131](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575131-L575131) | `ArrowFunctionExpression` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775486-775486](../../../../../../../../reference/runtime/host-main.cjs#L775486-L775486) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:775486 uses an implicit arrow-function return.
| [evaluation:575131-575131](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575131-L575131) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:575131 uses an implicit arrow-function return.

### host:775486

Calls written directly in this body: `connectorFiles.prepareDownload`.

SHA-256 of the source span: `b3ee34eea747bc0dfd2315f28704ac7eeaa739b61ed4927a26850d853fdb0f8f`.

### evaluation:575131

Calls written directly in this body: `connectorFiles.prepareDownload`.

SHA-256 of the source span: `fa9a006d5c049abba1c3d7b571afbea1f18b6c830daa5e88e8d07ee129fdbb75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
