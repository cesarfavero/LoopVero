# `valueFits`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758594-758602](../../../../../../reference/runtime/host-main.cjs#L758594-L758602) | `FunctionDeclaration` | no | `control, value` |
| [evaluation:548754-548762](../../../../../../reference/runtime/sand-eval-runner.cjs#L548754-L548762) | `FunctionDeclaration` | no | `control, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758594-758602](../../../../../../reference/runtime/host-main.cjs#L758594-L758602) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:548754-548762](../../../../../../reference/runtime/sand-eval-runner.cjs#L548754-L548762) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:758594

Calls written directly in this body: `choiceNameOf`, `isChoiceControl`, `isSwitchControl`.

SHA-256 of the source span: `8d221a33dafd55e804a75e89cad4d571c86e0109822a4d206f638527f30a8264`.

### evaluation:548754

Calls written directly in this body: `choiceNameOf`, `isChoiceControl`, `isSwitchControl`.

SHA-256 of the source span: `8d221a33dafd55e804a75e89cad4d571c86e0109822a4d206f638527f30a8264`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
