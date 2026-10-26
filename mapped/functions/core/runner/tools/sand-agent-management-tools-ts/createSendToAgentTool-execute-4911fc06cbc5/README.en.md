# `createSendToAgentTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757397-757431](../../../../../../../reference/runtime/host-main.cjs#L757397-L757431) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:543420-543454](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543420-L543454) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757397-757431](../../../../../../../reference/runtime/host-main.cjs#L757397-L757431) | 6 | 0 | 3 | 3 | 1 | 1 |
| [evaluation:543420-543454](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543420-L543454) | 6 | 0 | 3 | 3 | 1 | 1 |

### host:757397

Calls written directly in this body: `bindMessageDeliveryReport`, `d.getSelfAgentId`, `d.sendToAgent`, `reportDelivery.failed`, `reportDelivery.settled`, `resolveCardTaskThread`, `resolveSendToAgentImages`.

Assignment or increment targets: `sent`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `01f16500ba2dfcde6c3dc4d83392e583404aa2f88c2e883752606aed746cbfbe`.

### evaluation:543420

Calls written directly in this body: `bindMessageDeliveryReport`, `d.getSelfAgentId`, `d.sendToAgent`, `reportDelivery.failed`, `reportDelivery.settled`, `resolveCardTaskThread`, `resolveSendToAgentImages`.

Assignment or increment targets: `sent`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `069f796d5441ff6c0eda11792328eaf748dc90fff94ee144ee1879b58e325e12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
