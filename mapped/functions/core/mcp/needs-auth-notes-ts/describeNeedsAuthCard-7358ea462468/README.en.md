# `describeNeedsAuthCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-notes.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584892-584910](../../../../../../reference/runtime/sand-eval-runner.cjs#L584892-L584910) | `FunctionDeclaration` | no | `slot, surfaced, resumesOnSignIn, followUp` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584892-584910](../../../../../../reference/runtime/sand-eval-runner.cjs#L584892-L584910) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:584892

Calls written directly in this body: `describeCardFollowUp`, `describeConnectCardFollowUp`, `describeStdioSignInWait`, `describeTailnetHoldCard`, `formatMcpAccountDisplayName`, `legacyInAppFollowUp`.

SHA-256 of the source span: `1ee9ba1a01c9cbf18301a0fe1206f55164781cfd89ecedf08db279194650df6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
