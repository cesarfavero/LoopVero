# `refuseUnlessRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-cloud-agent.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-cloud-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777791-777797](../../../../../../../../reference/runtime/host-main.cjs#L777791-L777797) | `FunctionDeclaration` | no | `action` |
| [evaluation:577486-577492](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577486-L577492) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777791-777797](../../../../../../../../reference/runtime/host-main.cjs#L777791-L777797) | 2 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:577486-577492](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577486-L577492) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:777791

Calls written directly in this body: `CLOUD_AGENT_READ_ACTIONS.join`, `CLOUD_AGENT_READ_ACTIONS.some`, `new ToolCallUnexpectedEnvironmentError`.

Explicit throw targets: `ToolCallUnexpectedEnvironmentError`.

SHA-256 of the source span: `964e8fea5b868fed9696c4b2f68f3b0a763635c8efb2edab0ac6def206a09d3f`.

### evaluation:577486

Calls written directly in this body: `CLOUD_AGENT_READ_ACTIONS.join`, `CLOUD_AGENT_READ_ACTIONS.some`, `new ToolCallUnexpectedEnvironmentError`.

Explicit throw targets: `ToolCallUnexpectedEnvironmentError`.

SHA-256 of the source span: `964e8fea5b868fed9696c4b2f68f3b0a763635c8efb2edab0ac6def206a09d3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
