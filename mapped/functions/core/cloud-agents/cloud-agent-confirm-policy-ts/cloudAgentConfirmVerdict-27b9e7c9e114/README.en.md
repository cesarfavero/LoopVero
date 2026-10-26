# `cloudAgentConfirmVerdict`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-confirm-policy.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-confirm-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566821-566856](../../../../../../reference/runtime/sand-eval-runner.cjs#L566821-L566856) | `FunctionDeclaration` | yes | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566821-566856](../../../../../../reference/runtime/sand-eval-runner.cjs#L566821-L566856) | 9 | 0 | 2 | 8 | 0 | 0 |

### evaluation:566821

Calls written directly in this body: `DESTRUCTIVE_ACTIONS.has`, `OWNED_PROJECT_ACTIONS.has`, `OWNER_ONLY_ACTIONS.has`, `USER_ONLY_ACTIONS.has`, `args.agent_id.trim`, `deps.api.get`, `deps.launchedIds.has`, `formatCloudAgentNotOwnedMessage`, `formatCloudAgentProjectArchiveMessage`, `formatCloudAgentUnknownKindArchiveMessage`, `readsAsOwnedProject`, `refused2`.

SHA-256 of the source span: `bc336f324bfe27a18ec54eb1b0c29ae649276e7df5c511dcb99b8d89b0e3c395`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
