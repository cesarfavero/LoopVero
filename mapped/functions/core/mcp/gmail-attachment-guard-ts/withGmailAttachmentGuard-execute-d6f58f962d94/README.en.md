# `withGmailAttachmentGuard/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-attachment-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584371-584383](../../../../../../reference/runtime/sand-eval-runner.cjs#L584371-L584383) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584371-584383](../../../../../../reference/runtime/sand-eval-runner.cjs#L584371-L584383) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:584371

Calls written directly in this body: `.toLowerCase`, `attachmentsOf`, `composeToolName`, `executor.execute`, `firstVerdict`, `gmailAttachmentRefusal`, `record3`, `recordMcpExecRefusedBeforeDispatch`, `refusalResult`, `resolveServerHost`, `uploadFileOffered`.

SHA-256 of the source span: `59c8d85c76739161f5be98d23a41b174b2a5a6ed590504c7015ba144822301bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
