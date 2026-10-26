# `isChoiceControl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758569-758571](../../../../../../reference/runtime/host-main.cjs#L758569-L758571) | `FunctionDeclaration` | no | `control` |
| [evaluation:548729-548731](../../../../../../reference/runtime/sand-eval-runner.cjs#L548729-L548731) | `FunctionDeclaration` | no | `control` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758569-758571](../../../../../../reference/runtime/host-main.cjs#L758569-L758571) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548729-548731](../../../../../../reference/runtime/sand-eval-runner.cjs#L548729-L548731) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:758569

Calls written directly in this body: `CHOICE_CONTROL_NAMES.some`.

SHA-256 of the source span: `a86c3fd4ecef8e74a448a78a524ae4b6bbda6e61b137dfd48c8a52393bb4796d`.

### evaluation:548729

Calls written directly in this body: `CHOICE_CONTROL_NAMES.some`.

SHA-256 of the source span: `a86c3fd4ecef8e74a448a78a524ae4b6bbda6e61b137dfd48c8a52393bb4796d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
