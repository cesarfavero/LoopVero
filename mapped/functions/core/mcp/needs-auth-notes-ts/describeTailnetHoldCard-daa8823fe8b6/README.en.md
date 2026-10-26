# `describeTailnetHoldCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-notes.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584886-584891](../../../../../../reference/runtime/sand-eval-runner.cjs#L584886-L584891) | `FunctionDeclaration` | no | `slot, hold, surfaced` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584886-584891](../../../../../../reference/runtime/sand-eval-runner.cjs#L584886-L584891) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584886

Calls written directly in this body: `describeCardFollowUp`, `formatMcpAccountDisplayName`.

SHA-256 of the source span: `0b9cac2146f11709529c9d4fc0e48b37ec2489ef8b5a81957c677a565a2f92e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
