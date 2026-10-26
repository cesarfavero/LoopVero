# `createSandMultitaskTodoTool/render`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tasks/README.en.md).

**Module:** `core/sand-multitask.ts` · [Module README](../../../../modules/core/sand-multitask-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752240-752243](../../../../../reference/runtime/host-main.cjs#L752240-L752243) | `ArrowFunctionExpression` | yes | `ctx, output2, props` |
| [evaluation:530296-530299](../../../../../reference/runtime/sand-eval-runner.cjs#L530296-L530299) | `ArrowFunctionExpression` | yes | `ctx, output2, props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752240-752243](../../../../../reference/runtime/host-main.cjs#L752240-L752243) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:530296-530299](../../../../../reference/runtime/sand-eval-runner.cjs#L530296-L530299) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:752240

Calls written directly in this body: `tool.render`.

SHA-256 of the source span: `3f721d5bff39d932b96a86af3efc5a8b93b52de03953f436a1646fa1337fe04d`.

### evaluation:530296

Calls written directly in this body: `tool.render`.

SHA-256 of the source span: `3f721d5bff39d932b96a86af3efc5a8b93b52de03953f436a1646fa1337fe04d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
