# `userFormFieldIsCredentialLikeOnlyByAccountWording`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726233-726236](../../../../../../../reference/runtime/host-main.cjs#L726233-L726236) | `FunctionDeclaration` | no | `field` |
| [evaluation:560851-560854](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560851-L560854) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726233-726236](../../../../../../../reference/runtime/host-main.cjs#L726233-L726236) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560851-560854](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560851-L560854) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726233

Calls written directly in this body: `fieldSniffText`, `text3.replace`, `textLooksCredentialLike`.

SHA-256 of the source span: `2e0042e6c6586da13ff5678b8173a2fd67cded1f8d9550c5816faa4811e172fc`.

### evaluation:560851

Calls written directly in this body: `fieldSniffText`, `text3.replace`, `textLooksCredentialLike`.

SHA-256 of the source span: `2e0042e6c6586da13ff5678b8173a2fd67cded1f8d9550c5816faa4811e172fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
