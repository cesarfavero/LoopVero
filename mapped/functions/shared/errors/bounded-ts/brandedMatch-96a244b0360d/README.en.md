# `brandedMatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/bounded.ts` · [Module README](../../../../../modules/shared/errors/bounded-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:155164-155166](../../../../../../reference/runtime/host-main.cjs#L155164-L155166) | `FunctionDeclaration` | no | `pattern, value` |
| [evaluation:475829-475831](../../../../../../reference/runtime/sand-eval-runner.cjs#L475829-L475831) | `FunctionDeclaration` | no | `pattern, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155164-155166](../../../../../../reference/runtime/host-main.cjs#L155164-L155166) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475829-475831](../../../../../../reference/runtime/sand-eval-runner.cjs#L475829-L475831) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:155164

Calls written directly in this body: `pattern.test`.

SHA-256 of the source span: `1037dcf5bab62de6f5e78db3517eabec36cc13c9ebd46af84461092a7425c670`.

### evaluation:475829

Calls written directly in this body: `pattern.test`.

SHA-256 of the source span: `1037dcf5bab62de6f5e78db3517eabec36cc13c9ebd46af84461092a7425c670`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
