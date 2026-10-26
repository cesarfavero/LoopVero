# `summarizeDeviceToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/device-local-tools/device-tool-auto-review.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566185-566187](../../../../../../reference/runtime/sand-eval-runner.cjs#L566185-L566187) | `FunctionDeclaration` | no | `{ tool, input: input2, phone }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566185-566187](../../../../../../reference/runtime/sand-eval-runner.cjs#L566185-L566187) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566185

Calls written directly in this body: `tool.describeCall`.

SHA-256 of the source span: `60e6ad7fba89258a2a2fb67f11bb1c0bf7ab9d1c47b509085216d7c0c0ac2fa6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
