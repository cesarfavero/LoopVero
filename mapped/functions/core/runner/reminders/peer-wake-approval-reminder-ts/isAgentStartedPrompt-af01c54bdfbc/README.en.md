# `isAgentStartedPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/reminders/peer-wake-approval-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/peer-wake-approval-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529726-529732](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529726-L529732) | `FunctionDeclaration` | no | `prompt, hidden` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529726-529732](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529726-L529732) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:529726

Calls written directly in this body: `.join`, `.map`, `.some`, `.trim`, `prompt.replace`, `rest.split`, `splitAgentInboundBlocks`, `startsWithHiddenPromptMarker`, `text3.split`.

SHA-256 of the source span: `4b09032e8a67a544b2f9060476acab1c817aef8dd06b94da53de6a979eaaa47d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
