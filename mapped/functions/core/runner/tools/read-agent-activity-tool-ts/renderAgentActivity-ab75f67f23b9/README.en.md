# `renderAgentActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-agent-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-agent-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765428-765439](../../../../../../../reference/runtime/host-main.cjs#L765428-L765439) | `FunctionDeclaration` | no | `result, bounds2, nowMs2` |
| [evaluation:558795-558806](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558795-L558806) | `FunctionDeclaration` | no | `result, bounds2, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765428-765439](../../../../../../../reference/runtime/host-main.cjs#L765428-L765439) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558795-558806](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558795-L558806) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:765428

Calls written directly in this body: `.join`, `result.agents.map`.

SHA-256 of the source span: `a4d8ccd3942639e3a742783bb29c0cb3971d71d1f6291f17c4073efa4633c5de`.

### evaluation:558795

Calls written directly in this body: `.join`, `result.agents.map`.

SHA-256 of the source span: `75d94246e5600c14e98780fc69378157415a6bedabc55a098bfa646dd93194da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
