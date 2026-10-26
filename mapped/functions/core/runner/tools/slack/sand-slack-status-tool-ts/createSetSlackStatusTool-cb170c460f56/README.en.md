# `createSetSlackStatusTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/slack/sand-slack-status-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/slack/sand-slack-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740943-740954](../../../../../../../../reference/runtime/host-main.cjs#L740943-L740954) | `FunctionDeclaration` | no | `slackStatus` |
| [evaluation:480538-480549](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480538-L480549) | `FunctionDeclaration` | no | `slackStatus` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740943-740954](../../../../../../../../reference/runtime/host-main.cjs#L740943-L740954) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480538-480549](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480538-L480549) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740943

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `9d3ad6e5a0f87f048117dacbd3013ec7abf33824dbf7c18ffd635c0cf40ebe82`.

### evaluation:480538

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `9d3ad6e5a0f87f048117dacbd3013ec7abf33824dbf7c18ffd635c0cf40ebe82`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
