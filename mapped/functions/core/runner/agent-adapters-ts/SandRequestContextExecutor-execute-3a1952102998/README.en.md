# `SandRequestContextExecutor.execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582900-582927](../../../../../../reference/runtime/sand-eval-runner.cjs#L582900-L582927) | `method` | yes | `_ctx, _args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582900-582927](../../../../../../reference/runtime/sand-eval-runner.cjs#L582900-L582927) | 3 | 0 | 1 | 1 | 0 | 0 |

### evaluation:582900

Calls written directly in this body: `Timestamp.fromDate`, `cloudAgentBotStoreMounted`, `new McpMetaToolOptions`, `new RequestContext`, `new RequestContextEnv`, `new RequestContextResult`, `new RequestContextSuccess`, `this.requestContext.resolve`, `this.requestContext.resolveRules`, `this.resolveAgentSkills`.

Assignment or increment targets: `this.rulesPromise`.

SHA-256 of the source span: `47aa4a8910b29fa213bfa923c5c1d444c7f447a74ea5563f59b95e00c80e160e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
