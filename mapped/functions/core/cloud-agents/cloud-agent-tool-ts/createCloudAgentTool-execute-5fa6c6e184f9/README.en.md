# `createCloudAgentTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568899-568902](../../../../../../reference/runtime/sand-eval-runner.cjs#L568899-L568902) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568899-568902](../../../../../../reference/runtime/sand-eval-runner.cjs#L568899-L568902) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:568899

Calls written directly in this body: `ctx.get`, `executeCloudAgentToolCall`.

SHA-256 of the source span: `32951f7857f7695d3819d893e50f56f0f29e60fb0830c367d763d98fb79bb447`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
