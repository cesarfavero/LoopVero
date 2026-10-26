# `sendToMeeting`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760548-760562](../../../../../../../reference/runtime/host-main.cjs#L760548-L760562) | `FunctionDeclaration` | yes | `{   deps,   message,   meetingId,   signal }` |
| [evaluation:551363-551377](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551363-L551377) | `FunctionDeclaration` | yes | `{   deps,   message,   meetingId,   signal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760548-760562](../../../../../../../reference/runtime/host-main.cjs#L760548-L760562) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:551363-551377](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551363-L551377) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:760548

Calls written directly in this body: `deps.meetingChat.send`.

SHA-256 of the source span: `c2021dcba9913b2e49ada16b3989adc55ad490a349553a84f76403f4b3833c00`.

### evaluation:551363

Calls written directly in this body: `deps.meetingChat.send`.

SHA-256 of the source span: `c2021dcba9913b2e49ada16b3989adc55ad490a349553a84f76403f4b3833c00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
