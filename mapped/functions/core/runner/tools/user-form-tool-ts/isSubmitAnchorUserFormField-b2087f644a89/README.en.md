# `isSubmitAnchorUserFormField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726106-726108](../../../../../../../reference/runtime/host-main.cjs#L726106-L726108) | `FunctionDeclaration` | no | `field` |
| [evaluation:560724-560726](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560724-L560726) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726106-726108](../../../../../../../reference/runtime/host-main.cjs#L726106-L726108) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560724-560726](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560724-L560726) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726106

Calls written directly in this body: `ENTER_SUBMIT_INELIGIBLE_TYPES.has`.

SHA-256 of the source span: `2a8400ff3fea72034fa71bc1a928df4b95b8316c2d70f95732e8f5ff7bb935b3`.

### evaluation:560724

Calls written directly in this body: `ENTER_SUBMIT_INELIGIBLE_TYPES.has`.

SHA-256 of the source span: `2a8400ff3fea72034fa71bc1a928df4b95b8316c2d70f95732e8f5ff7bb935b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
