# `brandedEnumOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/bounded.ts` · [Module README](../../../../../modules/shared/errors/bounded-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:155148-155154](../../../../../../reference/runtime/host-main.cjs#L155148-L155154) | `FunctionDeclaration` | no | `values, fallback3` |
| [evaluation:475816-475822](../../../../../../reference/runtime/sand-eval-runner.cjs#L475816-L475822) | `FunctionDeclaration` | no | `values, fallback2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155148-155154](../../../../../../reference/runtime/host-main.cjs#L155148-L155154) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475816-475822](../../../../../../reference/runtime/sand-eval-runner.cjs#L475816-L475822) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:155148

Calls written directly in this body: `new Set`.

SHA-256 of the source span: `179f69926664b7cb36bce0920eb7e733a1320979971932762415f3932ce90f6e`.

### evaluation:475816

Calls written directly in this body: `new Set`.

SHA-256 of the source span: `ab8ba86dd3e3f285b066d2d3d92f9410ae752a4ed229468ede07ce715822dee9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
