# `presenceOnlyCloudAgentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/presence-only-host.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/presence-only-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568922-568962](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568922-L568962) | `FunctionDeclaration` | no | `{   reviewAction: reviewAction2,   fallbackLineage,   describeScmConnect,   scmConnectCard,   isCanvasesEnabled,   artifactsEnabled,   durableWatchEnabled,   replyModesEnabled,   publishRepositoryEnabled,   appsPublishEnabled,   publishAppEnabled,   originBuiltinEnabled,   exchangeEnabled,   botStoreMounted }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568922-568962](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568922-L568962) | 9 | 0 | 0 | 1 | 0 | 0 |

### evaluation:568922

Calls written directly in this body: `createCloudAgentTool`, `new Set`, `presenceOnlyPort`, `unwired`.

SHA-256 of the source span: `3dea4e97a3819d4fed005c790be3b6a6559350289a6417cac1754da9feb6d636`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
