# `SessionRuntime.setActiveSession/mutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738275-738287](../../../../../../../reference/runtime/host-main.cjs#L738275-L738287) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738275-738287](../../../../../../../reference/runtime/host-main.cjs#L738275-L738287) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:738275

Calls written directly in this body: `previous.automations.listDefinitions`, `this.deletedAgentIds.has`, `this.tm.automationRuntime.lastKnownAutomations.delete`, `this.tm.automationRuntime.recordInactiveAutomationChanges`, `this.tm.sessionStore.agentExists`.

SHA-256 of the source span: `2e8aaeb545eb04e09c614db04501e4ab7d2e6d5531007579c8c53c5313b05f92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
