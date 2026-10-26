# `createSandTaskTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/sand-task-tool.ts` · [Module README](../../../../../../modules/core/runner/subagents/sand-task-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763493-763540](../../../../../../../reference/runtime/host-main.cjs#L763493-L763540) | `FunctionDeclaration` | no | `args` |
| [evaluation:556535-556582](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556535-L556582) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763493-763540](../../../../../../../reference/runtime/host-main.cjs#L763493-L763540) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556535-556582](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556535-L556582) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:763493

Calls written directly in this body: `args.gates.executorForkContext`, `args.gates.taskSubagentRoster`, `createTaskTool`, `hasExecutorSubagent`, `new CombinedResourceAccessor`, `remoteBoxResourceAccessor.get`, `resourceEntry`, `sandTaskDescriptionBase`, `withSubagentLaunchPrefetch`.

SHA-256 of the source span: `c2b54ac4156ae150a03bca301b0bdf8e7e0731111f3bbe9ec2062a9298922e0d`.

### evaluation:556535

Calls written directly in this body: `args.gates.executorForkContext`, `args.gates.taskSubagentRoster`, `createTaskTool`, `hasExecutorSubagent`, `new CombinedResourceAccessor`, `remoteBoxResourceAccessor.get`, `resourceEntry`, `sandTaskDescriptionBase`, `withSubagentLaunchPrefetch`.

SHA-256 of the source span: `c2b54ac4156ae150a03bca301b0bdf8e7e0731111f3bbe9ec2062a9298922e0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
