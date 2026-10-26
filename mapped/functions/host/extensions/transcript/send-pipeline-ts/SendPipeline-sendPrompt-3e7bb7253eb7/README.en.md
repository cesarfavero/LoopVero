# `SendPipeline.sendPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/send-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740170-740188](../../../../../../../reference/runtime/host-main.cjs#L740170-L740188) | `method` | yes | `prompt, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740170-740188](../../../../../../../reference/runtime/host-main.cjs#L740170-L740188) | 5 | 0 | 1 | 1 | 2 | 0 |

### host:740170

Calls written directly in this body: `.some`, `new AgentGoneError`, `new SandBoxHarnessRetiredError`, `new SandServerRoomSendError`, `prompt.trim`, `this.refuseBoxTurn`, `this.tm.boxHarnessRefusals.reportServerHostedSkipped`, `this.tm.groupChat.isGroupAgentId`, `this.tm.sessions.ensureActionTarget`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.isServerHostedAgent`.

Explicit throw targets: `AgentGoneError`, `ConditionalExpression`.

SHA-256 of the source span: `e8a5f64a47f8448a35de345b637e87eda01da2ff212d35e08cac9ca0df1bd207`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
