# `shownUserFormOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726673-726695](../../../../../../../reference/runtime/host-main.cjs#L726673-L726695) | `FunctionDeclaration` | no | `form, started2` |
| [evaluation:561288-561310](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561288-L561310) | `FunctionDeclaration` | no | `form, started` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726673-726695](../../../../../../../reference/runtime/host-main.cjs#L726673-L726695) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:561288-561310](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561288-L561310) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:726673

Calls written directly in this body: `form.fields.filter`, `shownFields.map`.

SHA-256 of the source span: `c615dac47f8202549c6f0c51dbbc5fba7100ebe14b36af07818acb59d32a0fcb`.

### evaluation:561288

Calls written directly in this body: `form.fields.filter`, `shownFields.map`.

SHA-256 of the source span: `a7073e08f8c1f6b1bbfb0fbe7183e1cae2c05e56735fe9d0b76edea98be24f55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
