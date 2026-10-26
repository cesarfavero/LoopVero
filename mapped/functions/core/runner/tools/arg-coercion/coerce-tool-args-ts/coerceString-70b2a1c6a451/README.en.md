# `coerceString`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724882-724890](../../../../../../../../reference/runtime/host-main.cjs#L724882-L724890) | `FunctionDeclaration` | no | `schema3, value` |
| [evaluation:479845-479853](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479845-L479853) | `FunctionDeclaration` | no | `schema3, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724882-724890](../../../../../../../../reference/runtime/host-main.cjs#L724882-L724890) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479845-479853](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479845-L479853) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724882

Calls written directly in this body: `coerceStringArg`, `kinds.has`, `kindsOf2`, `new Set`, `schema3.isNullable`.

SHA-256 of the source span: `5764de218322628336b2119ef31f74b93f752064c71eea51bf2ada663b3f05aa`.

### evaluation:479845

Calls written directly in this body: `coerceStringArg`, `kinds.has`, `kindsOf2`, `new Set`, `schema3.isNullable`.

SHA-256 of the source span: `28363fda7cbaba4a2d6c0ca85c677d39ce8c2e3ddefdf3b9d4bfa1b69884ada1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
