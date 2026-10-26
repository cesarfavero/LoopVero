# `phrase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758694-758703](../../../../../../reference/runtime/host-main.cjs#L758694-L758703) | `FunctionDeclaration` | no | `control, value, target` |
| [evaluation:548854-548863](../../../../../../reference/runtime/sand-eval-runner.cjs#L548854-L548863) | `FunctionDeclaration` | no | `control, value, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758694-758703](../../../../../../reference/runtime/host-main.cjs#L758694-L758703) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:548854-548863](../../../../../../reference/runtime/sand-eval-runner.cjs#L548854-L548863) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:758694

Calls written directly in this body: `String`, `choiceOf`, `isChoiceControl`, `isSwitchControl`.

SHA-256 of the source span: `76b558ca784bb097b0daf5409335d0e2d6e9a38a6ad827037f4de56a51b627c1`.

### evaluation:548854

Calls written directly in this body: `String`, `choiceOf`, `isChoiceControl`, `isSwitchControl`.

SHA-256 of the source span: `76b558ca784bb097b0daf5409335d0e2d6e9a38a6ad827037f4de56a51b627c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
