# `cloudAgentDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568821-568877](../../../../../../reference/runtime/sand-eval-runner.cjs#L568821-L568877) | `FunctionDeclaration` | no | `{   scmConnectCard,   describeScmConnect,   isCanvasesEnabled,   artifactsEnabled,   dumpOnDemand,   durableWatch,   replyModes,   publishRepository,   appsPublish,   publishApp,   originBuiltin,   agentScope = "launched",   projects }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568821-568877](../../../../../../reference/runtime/sand-eval-runner.cjs#L568821-L568877) | 17 | 0 | 0 | 1 | 0 | 0 |

### evaluation:568821

Calls written directly in this body: `.join`, `cloudAgentCoordinatorActionsSentence`, `cloudAgentGetDescriptionLine`, `cloudAgentLifecycleLines`, `cloudAgentListDescriptionLine`, `cloudAgentReplyDescriptionLine`, `cloudAgentWatchAdoptionClause`, `publishRepositoryActionLine`, `unwatchActionLine`.

SHA-256 of the source span: `42a2b46805979100c609390624f441eb8f9e36cf12c16d3e148d36a3ea9757f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
