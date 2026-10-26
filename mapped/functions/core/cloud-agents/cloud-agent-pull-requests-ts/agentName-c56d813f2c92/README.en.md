# `agentName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566611-566614](../../../../../../reference/runtime/sand-eval-runner.cjs#L566611-L566614) | `FunctionDeclaration` | no | `agent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566611-566614](../../../../../../reference/runtime/sand-eval-runner.cjs#L566611-L566614) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566611

Calls written directly in this body: `agent.name.trim`.

SHA-256 of the source span: `bfabbcfc89fc8fd4e191fd1dd0ac953719ba8139204733988fdc4aadfaac5725`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
