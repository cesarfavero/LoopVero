# `ownerProject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566615-566626](../../../../../../reference/runtime/sand-eval-runner.cjs#L566615-L566626) | `FunctionDeclaration` | no | `agent, byId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566615-566626](../../../../../../reference/runtime/sand-eval-runner.cjs#L566615-L566626) | 3 | 1 | 0 | 3 | 0 | 0 |

### evaluation:566615

Calls written directly in this body: `agentName`, `byId.get`.

Assignment or increment targets: `hop`, `managerBcId`, `top`.

SHA-256 of the source span: `bcce34d33d744be0d25027e63278bebb1b897f9aac5b48fec9f2d86d185483fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
