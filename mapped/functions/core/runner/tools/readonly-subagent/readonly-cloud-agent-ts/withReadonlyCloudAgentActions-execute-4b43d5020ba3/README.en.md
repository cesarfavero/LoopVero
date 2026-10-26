# `withReadonlyCloudAgentActions/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-cloud-agent.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-cloud-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777804-777814](../../../../../../../../reference/runtime/host-main.cjs#L777804-L777814) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |
| [evaluation:577499-577509](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577499-L577509) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777804-777814](../../../../../../../../reference/runtime/host-main.cjs#L777804-L777814) | 0 | 1 | 1 | 1 | 0 | 0 |
| [evaluation:577499-577509](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577499-L577509) | 0 | 1 | 1 | 1 | 0 | 0 |

### host:777804

Calls written directly in this body: `calledAction`, `ctx.with`, `oneShot`, `refuseUnlessRead`, `tool.execute`.

Assignment or increment targets: `rawArgs`.

SHA-256 of the source span: `be3ef094f5555aad2f4edf40d32ab74a98bcc7edbef9401474518661d77d595a`.

### evaluation:577499

Calls written directly in this body: `calledAction`, `ctx.with`, `oneShot2`, `refuseUnlessRead`, `tool.execute`.

Assignment or increment targets: `rawArgs`.

SHA-256 of the source span: `2011bdff2346f13ae7754c2968e1a8c7a9e5d1f4e7e0543112e961ff90af034a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
