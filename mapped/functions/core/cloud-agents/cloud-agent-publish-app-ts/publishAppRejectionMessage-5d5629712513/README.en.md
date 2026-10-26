# `publishAppRejectionMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-publish-app.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-publish-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566973-566997](../../../../../../reference/runtime/sand-eval-runner.cjs#L566973-L566997) | `FunctionDeclaration` | no | `error63, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566973-566997](../../../../../../reference/runtime/sand-eval-runner.cjs#L566973-L566997) | 13 | 0 | 0 | 8 | 0 | 0 |

### evaluation:566973

Calls written directly in this body: `/does not have a running pod/.test`, `[computed].details.detail.trim`, `error63.findDetails`, `error63.rawMessage.trim`.

SHA-256 of the source span: `888f44b17f1b567c793207808313ce09467121e53b512270bf390a079981d14c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
