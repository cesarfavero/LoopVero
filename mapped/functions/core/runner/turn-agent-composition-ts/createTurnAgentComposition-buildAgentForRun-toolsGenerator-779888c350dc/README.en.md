# `createTurnAgentComposition/buildAgentForRun/toolsGenerator`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588330-588444](../../../../../../reference/runtime/sand-eval-runner.cjs#L588330-L588444) | `ArrowFunctionExpression` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588330-588444](../../../../../../reference/runtime/sand-eval-runner.cjs#L588330-L588444) | 7 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588330

Calls written directly in this body: `.some`, `bindFirstPartyToolMocks`, `createSandSummarizationHandler`, `createSkillTool`, `host.buildTurnTools`, `host.mcpConfigJsonForTurn`, `host.promptGlue.createToolResultTextWriter`, `lastReportedContextWindow`, `new Set`, `session.getModelId`, `subagentLaunch.registerReviewer`, `toolSetHandle.getDynamicTools`, `toolSetHandle.transformToolsInPlace`, `turnToolHost.gates.hackySymbolicToolCalls`, `turnToolHost.gates.skillSearch`, `turnTools.getAllTools`.

Assignment or increment targets: `uploadFileListed`.

SHA-256 of the source span: `565a010778405cdd4aacab36bd2146fd945ab8e8efacd447ffcf65f0a1ae4b60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
