# `RunLifecycle.watchActiveSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740081-740085](../../../../../../../reference/runtime/host-main.cjs#L740081-L740085) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740081-740085](../../../../../../../reference/runtime/host-main.cjs#L740081-L740085) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:740081

Calls written directly in this body: `this.tm.automationRuntime.watchSessionAutomations`, `this.tm.roster.watchSessionProfile`, `this.tm.skillCommands.watchSessionSkills`.

SHA-256 of the source span: `37a492571b79832073ee1072174ba45761057b0e15ed7f7cdaee61d4d4cdddd9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
