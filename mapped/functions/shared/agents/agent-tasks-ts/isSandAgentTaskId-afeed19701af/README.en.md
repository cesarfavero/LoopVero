# `isSandAgentTaskId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tasks/README.en.md).

**Module:** `shared/agents/agent-tasks.ts` · [Module README](../../../../../modules/shared/agents/agent-tasks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:710842-710844](../../../../../../reference/runtime/host-main.cjs#L710842-L710844) | `FunctionDeclaration` | no | `value` |
| [evaluation:524655-524657](../../../../../../reference/runtime/sand-eval-runner.cjs#L524655-L524657) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710842-710844](../../../../../../reference/runtime/host-main.cjs#L710842-L710844) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524655-524657](../../../../../../reference/runtime/sand-eval-runner.cjs#L524655-L524657) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:710842

Calls written directly in this body: `SAND_AGENT_TASK_ID_PATTERN.test`.

SHA-256 of the source span: `a67c5fe60167e44eacaf69413803f7bdca847fc91726e6559400ac33b55027fb`.

### evaluation:524655

Calls written directly in this body: `SAND_AGENT_TASK_ID_PATTERN.test`.

SHA-256 of the source span: `a67c5fe60167e44eacaf69413803f7bdca847fc91726e6559400ac33b55027fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
