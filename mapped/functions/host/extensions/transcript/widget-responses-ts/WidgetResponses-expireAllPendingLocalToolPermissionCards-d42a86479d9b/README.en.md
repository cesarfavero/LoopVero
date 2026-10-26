# `WidgetResponses.expireAllPendingLocalToolPermissionCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782604-782649](../../../../../../../reference/runtime/host-main.cjs#L782604-L782649) | `method` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782604-782649](../../../../../../../reference/runtime/host-main.cjs#L782604-L782649) | 4 | 1 | 2 | 2 | 0 | 3 |

### host:782604

Calls written directly in this body: `reportSweepFailure`, `this.settlePendingLocalToolPermissionAsksOnSession`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingLocalToolPermissionAsks`, `this.tm.sessionStore.listAgentIds`.

Assignment or increment targets: `agentIds`, `expired`.

SHA-256 of the source span: `2e1dc1d4db9c135e7da721ae2067cca9df7197c2329a6e595daed1abacc723f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
