# `NoopInteractionListener.query`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-listener.js` · [Module README](../../../../modules/agent-core/interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:255092-255148](../../../../../reference/runtime/sand-eval-runner.cjs#L255092-L255148) | `method` | yes | `_ctx, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:255092-255148](../../../../../reference/runtime/sand-eval-runner.cjs#L255092-L255148) | 13 | 0 | 0 | 11 | 1 | 0 |

### evaluation:255092

Calls written directly in this body: `Responses.askQuestion`, `Responses.connectScmRejected`, `Responses.createPlan`, `Responses.generateImageApproved`, `Responses.mcpAuthRejected`, `Responses.prManagement`, `Responses.replaceEnv`, `Responses.setupVmEnvironment`, `Responses.switchModeRejected`, `Responses.webFetchApproved`, `Responses.webSearchApproved`, `createPrManagementNotAvailableResult`, `new AskQuestionRejected`, `new AskQuestionResult`, `new CreatePlanResult`, `new CreatePlanSuccess`, `new Error`, `new ReplaceEnvFailure`, `new ReplaceEnvResult`, `new SetupVmEnvironmentResult`, `new SetupVmEnvironmentSuccess`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `db5e84d357f25a47896b09603b797d73b53598c1b2c5e6df7b5d294845b89171`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
