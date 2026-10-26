# `recordCloudAgentToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-metrics.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:544075-544083](../../../../../../reference/runtime/sand-eval-runner.cjs#L544075-L544083) | `FunctionDeclaration` | no | `metrics2, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:544075-544083](../../../../../../reference/runtime/sand-eval-runner.cjs#L544075-L544083) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:544075

Calls written directly in this body: `recordCloudAgentMetric`.

SHA-256 of the source span: `3086bfa68c869dcd8138ada47448f2b09885824a1ed50030435345406db534c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
