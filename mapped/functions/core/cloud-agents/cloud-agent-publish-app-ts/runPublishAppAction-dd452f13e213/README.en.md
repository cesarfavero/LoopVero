# `runPublishAppAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-publish-app.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-publish-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566922-566944](../../../../../../reference/runtime/sand-eval-runner.cjs#L566922-L566944) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566922-566944](../../../../../../reference/runtime/sand-eval-runner.cjs#L566922-L566944) | 4 | 0 | 2 | 4 | 1 | 1 |

### evaluation:566922

Calls written directly in this body: `args.agent_id.trim`, `args.project_dir.trim`, `deps.api.publishApp`, `describePublishAppResult`, `publishAppRejectionMessage`, `raiseCard`.

Assignment or increment targets: `result`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `beec14689a4729ad624897b4ae016569f3c38e578101644ee78c1e2150b6002a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
