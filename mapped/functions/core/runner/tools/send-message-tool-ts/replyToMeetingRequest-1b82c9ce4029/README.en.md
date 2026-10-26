# `replyToMeetingRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760563-760601](../../../../../../../reference/runtime/host-main.cjs#L760563-L760601) | `FunctionDeclaration` | yes | `{   deps,   message,   meetingId,   key }` |
| [evaluation:551378-551416](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551378-L551416) | `FunctionDeclaration` | yes | `{   deps,   message,   meetingId,   key }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760563-760601](../../../../../../../reference/runtime/host-main.cjs#L760563-L760601) | 6 | 0 | 1 | 6 | 0 | 0 |
| [evaluation:551378-551416](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551378-L551416) | 6 | 0 | 1 | 6 | 0 | 0 |

### host:760563

Calls written directly in this body: `deps.replyToMeetingRequest`.

SHA-256 of the source span: `456c5819736b91629457ca2dfe49df0da7e572e271672faecc31eaa9568d1384`.

### evaluation:551378

Calls written directly in this body: `deps.replyToMeetingRequest`.

SHA-256 of the source span: `456c5819736b91629457ca2dfe49df0da7e572e271672faecc31eaa9568d1384`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
