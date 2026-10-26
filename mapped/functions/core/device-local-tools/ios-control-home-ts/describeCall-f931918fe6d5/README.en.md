# `describeCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758825-758828](../../../../../../reference/runtime/host-main.cjs#L758825-L758828) | `ArrowFunctionExpression` | no | `input2` |
| [evaluation:548985-548988](../../../../../../reference/runtime/sand-eval-runner.cjs#L548985-L548988) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758825-758828](../../../../../../reference/runtime/host-main.cjs#L758825-L758828) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548985-548988](../../../../../../reference/runtime/sand-eval-runner.cjs#L548985-L548988) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:758825

Calls written directly in this body: `controlHomeParameters.safeParse`, `describeControlHome`.

SHA-256 of the source span: `e7e498117544b6a2f7c1f8039fcfa1c416db903b1c0bc9e7ce515633078e0dbf`.

### evaluation:548985

Calls written directly in this body: `controlHomeParameters.safeParse`, `describeControlHome`.

SHA-256 of the source span: `3ac51fdf95456604a8cdcb2281031ae3c96fdb4b236ddab9935d741d12de8cf8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
