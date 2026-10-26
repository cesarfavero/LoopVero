# `decapitalize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/sand-text.ts` · [Module README](../../../../modules/shared/sand-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:227876-227879](../../../../../reference/runtime/host-main.cjs#L227876-L227879) | `FunctionDeclaration` | no | `phrase2` |
| [evaluation:474412-474415](../../../../../reference/runtime/sand-eval-runner.cjs#L474412-L474415) | `FunctionDeclaration` | no | `phrase2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227876-227879](../../../../../reference/runtime/host-main.cjs#L227876-L227879) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474412-474415](../../../../../reference/runtime/sand-eval-runner.cjs#L474412-L474415) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:227876

Calls written directly in this body: `first.toLowerCase`, `phrase2.slice`.

SHA-256 of the source span: `f82cb59c8c9ae74e320039dbe204fab368a935c7f32756edff30c27930081d07`.

### evaluation:474412

Calls written directly in this body: `first.toLowerCase`, `phrase2.slice`.

SHA-256 of the source span: `f82cb59c8c9ae74e320039dbe204fab368a935c7f32756edff30c27930081d07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
