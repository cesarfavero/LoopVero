# `bindSecureValuesUserFormToLiveSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726569-726586](../../../../../../../reference/runtime/host-main.cjs#L726569-L726586) | `FunctionDeclaration` | yes | `ctx, form, liveBrowserHost` |
| [evaluation:561184-561201](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561184-L561201) | `FunctionDeclaration` | yes | `ctx, form, liveBrowserHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726569-726586](../../../../../../../reference/runtime/host-main.cjs#L726569-L726586) | 3 | 0 | 1 | 1 | 2 | 0 |
| [evaluation:561184-561201](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561184-L561201) | 3 | 0 | 1 | 1 | 2 | 0 |

### host:726569

Calls written directly in this body: `form.domains.find`, `liveBrowserHost`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `57476439adc09b07b4c83d6f9075a6ba75fe75c4aa992a253964bbd7cad32868`.

### evaluation:561184

Calls written directly in this body: `form.domains.find`, `liveBrowserHost`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `9e36a07a278e477b7b08fcac50ce0cb6c73f06bf8cbf91238585ede0f00325c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
