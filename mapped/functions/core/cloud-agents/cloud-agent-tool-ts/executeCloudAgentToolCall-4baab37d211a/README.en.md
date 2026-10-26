# `executeCloudAgentToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568098-568114](../../../../../../reference/runtime/sand-eval-runner.cjs#L568098-L568114) | `FunctionDeclaration` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568098-568114](../../../../../../reference/runtime/sand-eval-runner.cjs#L568098-L568114) | 0 | 0 | 1 | 1 | 1 | 1 |

### evaluation:568098

Calls written directly in this body: `cloudAgentMetricsScope`, `recordCloudAgentToolCall`, `runCloudAgentAction`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `ef2a947a03b9d8599e79993e8d4f452ad949930f7a1c491205db4bd124161295`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
