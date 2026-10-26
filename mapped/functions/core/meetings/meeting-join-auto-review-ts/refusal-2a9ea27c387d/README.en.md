# `refusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772902-772905](../../../../../../reference/runtime/host-main.cjs#L772902-L772905) | `FunctionDeclaration` | no | `approval` |
| [evaluation:572128-572131](../../../../../../reference/runtime/sand-eval-runner.cjs#L572128-L572131) | `FunctionDeclaration` | no | `approval` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772902-772905](../../../../../../reference/runtime/host-main.cjs#L772902-L772905) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572128-572131](../../../../../../reference/runtime/sand-eval-runner.cjs#L572128-L572131) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:772902

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `89be3c03ce97c716f9e3f6de99f8eb60fa00f72ed73f114b967894a2036331bc`.

### evaluation:572128

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `89be3c03ce97c716f9e3f6de99f8eb60fa00f72ed73f114b967894a2036331bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
