# `compactFieldAliases`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726147-726149](../../../../../../../reference/runtime/host-main.cjs#L726147-L726149) | `FunctionDeclaration` | no | `field` |
| [evaluation:560765-560767](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560765-L560767) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726147-726149](../../../../../../../reference/runtime/host-main.cjs#L726147-L726149) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560765-560767](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560765-L560767) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726147

Calls written directly in this body: `.map`.

SHA-256 of the source span: `acb147faca5ebe48cb3668b88a39c5aabece960b4f4d4f2ab6c9c3256182a361`.

### evaluation:560765

Calls written directly in this body: `.map`.

SHA-256 of the source span: `acb147faca5ebe48cb3668b88a39c5aabece960b4f4d4f2ab6c9c3256182a361`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
