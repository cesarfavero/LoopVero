# `refineShipment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741530-741554](../../../../../../../reference/runtime/host-main.cjs#L741530-L741554) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:482477-482501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482477-L482501) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741530-741554](../../../../../../../reference/runtime/host-main.cjs#L741530-L741554) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482477-482501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482477-L482501) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:741530

Calls written directly in this body: `ctx.addIssue`, `isFieldProvided`.

SHA-256 of the source span: `b3c26e6dc6c96f54279848186882fa9dda1119b2c9f952fea63d7c4d5cf0bcc5`.

### evaluation:482477

Calls written directly in this body: `ctx.addIssue`, `isFieldProvided`.

SHA-256 of the source span: `dcf34072369f84e017771fa0238198c0ca751e3792d97e36c114b1c0f7ba1302`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
