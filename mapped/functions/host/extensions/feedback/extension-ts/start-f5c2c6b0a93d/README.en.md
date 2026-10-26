# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/feedback/extension.ts` · [Module README](../../../../../../modules/host/extensions/feedback/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553680-553709](../../../../../../../reference/runtime/host-main.cjs#L553680-L553709) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553680-553709](../../../../../../../reference/runtime/host-main.cjs#L553680-L553709) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:553680

Calls written directly in this body: `createSandFeedbackReporter`, `new SandFeedbackService`.

SHA-256 of the source span: `ad71fa8b29e2b834fa756cbeff42c6f495d686efb1f8f01e87f1aca81f5a5e02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
