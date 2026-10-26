# `withGmailDraftSendGuard/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-draft-send-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-draft-send-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584438-584444](../../../../../../reference/runtime/sand-eval-runner.cjs#L584438-L584444) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584438-584444](../../../../../../reference/runtime/sand-eval-runner.cjs#L584438-L584444) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584438

Calls written directly in this body: `executor.execute`, `ignoredDraftSendFields`, `recordMcpExecRefusedBeforeDispatch`, `refusalResult2`, `refusals.increment`.

SHA-256 of the source span: `8bd2cbd640de8d1a6f5e9d7c9d4fad13edc6e95969eaa731d1d8e1f274c60d06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
