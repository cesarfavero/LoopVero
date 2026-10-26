# `clampInstruction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/auto-review/sand-auto-review-instructions.ts` · [Module README](../../../../../modules/shared/auto-review/sand-auto-review-instructions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687317-687323](../../../../../../reference/runtime/host-main.cjs#L687317-L687323) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687317-687323](../../../../../../reference/runtime/host-main.cjs#L687317-L687323) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:687317

Calls written directly in this body: `trimmed.slice`, `value.trim`.

SHA-256 of the source span: `7a4caee863f11cad861a57008be8370f675a54f6b48aaa8994fdff5d70371a57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
