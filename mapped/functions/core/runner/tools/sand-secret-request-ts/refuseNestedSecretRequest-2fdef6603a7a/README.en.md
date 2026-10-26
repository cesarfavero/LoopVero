# `refuseNestedSecretRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-secret-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-secret-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:548037-548039](../../../../../../../reference/runtime/sand-eval-runner.cjs#L548037-L548039) | `FunctionDeclaration` | no | `_name` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:548037-548039](../../../../../../../reference/runtime/sand-eval-runner.cjs#L548037-L548039) | 0 | 0 | 0 | 0 | 1 | 0 |

### evaluation:548037

Calls written directly in this body: `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `4312299c2e48ff6eb01709a1e956703a3d0f430004b9bc2ff18d5f34599c44b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
