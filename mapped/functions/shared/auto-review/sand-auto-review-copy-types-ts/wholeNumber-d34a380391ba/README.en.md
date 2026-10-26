# `wholeNumber`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/auto-review/sand-auto-review-copy-types.ts` · [Module README](../../../../../modules/shared/auto-review/sand-auto-review-copy-types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:694022-694024](../../../../../../reference/runtime/host-main.cjs#L694022-L694024) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694022-694024](../../../../../../reference/runtime/host-main.cjs#L694022-L694024) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:694022

Calls written directly in this body: `Number.isInteger`.

SHA-256 of the source span: `8964acc6614e530e9ec60289b875a146c534bebd9b0cec6f0fcea8793669f70a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
