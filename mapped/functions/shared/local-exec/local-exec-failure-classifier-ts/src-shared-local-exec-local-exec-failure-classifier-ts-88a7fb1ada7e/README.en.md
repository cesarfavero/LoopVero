# `src/shared/local-exec/local-exec-failure-classifier.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/local-exec/local-exec-failure-classifier.ts` · [Module README](../../../../../modules/shared/local-exec/local-exec-failure-classifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226153-226157](../../../../../../reference/runtime/host-main.cjs#L226153-L226157) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226153-226157](../../../../../../reference/runtime/host-main.cjs#L226153-L226157) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:226153

Calls written directly in this body: `init_bounded`.

Assignment or increment targets: `ERRNO_TOKEN`.

SHA-256 of the source span: `926a9de929777c5d2f8d5860ceab398ec641ee7322e75c2cae0768b6b7aa00e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
