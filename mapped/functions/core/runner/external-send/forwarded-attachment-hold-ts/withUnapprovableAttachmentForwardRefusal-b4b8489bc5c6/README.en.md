# `withUnapprovableAttachmentForwardRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/forwarded-attachment-hold.ts` · [Module README](../../../../../../modules/core/runner/external-send/forwarded-attachment-hold-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583670-583695](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583670-L583695) | `FunctionDeclaration` | no | `executor, resolveServerHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583670-583695](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583670-L583695) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583670

Calls written directly in this body: `createForwardedAttachmentHold`.

SHA-256 of the source span: `a46209d85af3ff7e6ffc81cb06c08a18f94bfa726dec9813a93fe35bdd836c54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
