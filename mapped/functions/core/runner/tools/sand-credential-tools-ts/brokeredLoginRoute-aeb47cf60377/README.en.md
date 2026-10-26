# `brokeredLoginRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751864-751876](../../../../../../../reference/runtime/host-main.cjs#L751864-L751876) | `FunctionDeclaration` | no | `connectOffer, formGuidance, access5, lister` |
| [evaluation:524930-524942](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524930-L524942) | `FunctionDeclaration` | no | `connectOffer, formGuidance, access4, lister` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751864-751876](../../../../../../../reference/runtime/host-main.cjs#L751864-L751876) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524930-524942](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524930-L524942) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751864

Calls written directly in this body: `brokeredStatusRoute`.

SHA-256 of the source span: `622eb132e52af38fdd4c561497f8d15fa5547d4fb2f33c9d4f3cf6aa27be5ffc`.

### evaluation:524930

Calls written directly in this body: `brokeredStatusRoute`.

SHA-256 of the source span: `49ca09ad56a06e61e4fc8aaf2896dd162f812088cb0af2cea3cc50e28ca130ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
