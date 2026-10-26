# `adminLockRemovesChoice`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557884-557886](../../../../../../../reference/runtime/host-main.cjs#L557884-L557886) | `FunctionDeclaration` | no | `row, facts` |
| [evaluation:550692-550694](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550692-L550694) | `FunctionDeclaration` | no | `row, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557884-557886](../../../../../../../reference/runtime/host-main.cjs#L557884-L557886) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550692-550694](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550692-L550694) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557884

Calls written directly in this body: `adminLockState`.

SHA-256 of the source span: `91c3b7cf111753fc2468bc04325bff4e6c0bad28327ea74af8b7bdda77c55159`.

### evaluation:550692

Calls written directly in this body: `adminLockState`.

SHA-256 of the source span: `91c3b7cf111753fc2468bc04325bff4e6c0bad28327ea74af8b7bdda77c55159`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
