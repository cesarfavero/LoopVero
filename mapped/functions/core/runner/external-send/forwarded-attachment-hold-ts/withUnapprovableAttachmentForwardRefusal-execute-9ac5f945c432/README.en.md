# `withUnapprovableAttachmentForwardRefusal/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/forwarded-attachment-hold.ts` · [Module README](../../../../../../modules/core/runner/external-send/forwarded-attachment-hold-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583674-583693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583674-L583693) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583674-583693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583674-L583693) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:583674

Calls written directly in this body: `executor.execute`, `heldCallOf`, `hold`, `new McpResult`, `new McpSuccess`, `new McpTextContent`, `new McpToolResultContentItem`, `recordMcpExecRefusedBeforeDispatch`.

SHA-256 of the source span: `ca7500d5202f8bf59d6bfddc80c6b39cab199aa3897b84f0f2481f85e6c0069c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
