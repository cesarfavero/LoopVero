# `createFetchConnectedActivityTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-connected-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763752-763752](../../../../../../../reference/runtime/host-main.cjs#L763752-L763752) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |
| [evaluation:556800-556800](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556800-L556800) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763752-763752](../../../../../../../reference/runtime/host-main.cjs#L763752-L763752) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:763752 uses an implicit arrow-function return.
| [evaluation:556800-556800](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556800-L556800) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:556800 uses an implicit arrow-function return.

### host:763752

Calls written directly in this body: `deps.fetch`, `formatConnectedActivity`.

SHA-256 of the source span: `33bfb3b15b44424d5bc3ef3653b2acf79f83a4d72e3e0c41775f7c70394a2280`.

### evaluation:556800

Calls written directly in this body: `deps.fetch`, `formatConnectedActivity`.

SHA-256 of the source span: `33bfb3b15b44424d5bc3ef3653b2acf79f83a4d72e3e0c41775f7c70394a2280`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
