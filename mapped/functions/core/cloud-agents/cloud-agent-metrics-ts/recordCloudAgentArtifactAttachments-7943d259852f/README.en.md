# `recordCloudAgentArtifactAttachments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-metrics.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757982-757994](../../../../../../reference/runtime/host-main.cjs#L757982-L757994) | `FunctionDeclaration` | no | `metrics2, sources, attachedRunIds` |
| [evaluation:544062-544074](../../../../../../reference/runtime/sand-eval-runner.cjs#L544062-L544074) | `FunctionDeclaration` | no | `metrics2, sources, attachedRunIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757982-757994](../../../../../../reference/runtime/host-main.cjs#L757982-L757994) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:544062-544074](../../../../../../reference/runtime/sand-eval-runner.cjs#L544062-L544074) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:757982

Calls written directly in this body: `recordCloudAgentMetric`.

SHA-256 of the source span: `5fa40a681dc22fd1852b1d37eb49dd3049ad0ce1d27fce9fb8d8c0abdfc793e9`.

### evaluation:544062

Calls written directly in this body: `recordCloudAgentMetric`.

SHA-256 of the source span: `5fa40a681dc22fd1852b1d37eb49dd3049ad0ce1d27fce9fb8d8c0abdfc793e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
