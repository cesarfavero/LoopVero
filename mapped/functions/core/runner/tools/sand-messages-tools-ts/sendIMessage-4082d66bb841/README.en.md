# `sendIMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778141-778154](../../../../../../../reference/runtime/host-main.cjs#L778141-L778154) | `FunctionDeclaration` | yes | `ctx, args, tools` |
| [evaluation:577876-577889](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577876-L577889) | `FunctionDeclaration` | yes | `ctx, args, tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778141-778154](../../../../../../../reference/runtime/host-main.cjs#L778141-L778154) | 0 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:577876-577889](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577876-L577889) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:778141

Calls written directly in this body: `JSON.stringify`, `bindMessageDeliveryReport`, `displayOf`, `reportDelivery.failed`, `reportDelivery.settled`, `sendFailureCategory`, `sendOp`, `tools.messages.run`.

Assignment or increment targets: `result`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `d4d89cb955bc04135acb692d81c7e870a62c1ab04664abb398b1fbf0060c723a`.

### evaluation:577876

Calls written directly in this body: `JSON.stringify`, `bindMessageDeliveryReport`, `displayOf`, `reportDelivery.failed`, `reportDelivery.settled`, `sendFailureCategory`, `sendOp`, `tools.messages.run`.

Assignment or increment targets: `result`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `99f74fcf29e853006c55461a2f22146b18ab1363e39fe428dd1cc6226dfa24d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
