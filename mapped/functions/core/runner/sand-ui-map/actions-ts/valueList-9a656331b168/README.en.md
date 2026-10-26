# `valueList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557917-557922](../../../../../../../reference/runtime/host-main.cjs#L557917-L557922) | `FunctionDeclaration` | no | `action` |
| [evaluation:550725-550730](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550725-L550730) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557917-557922](../../../../../../../reference/runtime/host-main.cjs#L557917-L557922) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:550725-550730](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550725-L550730) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:557917

Calls written directly in this body: `.join`, `action.values.map`.

SHA-256 of the source span: `649f6d15ffac445d5f594cc67bdf5834864e3f8c8a0e8fa257eae064dcb12521`.

### evaluation:550725

Calls written directly in this body: `.join`, `action.values.map`.

SHA-256 of the source span: `649f6d15ffac445d5f594cc67bdf5834864e3f8c8a0e8fa257eae064dcb12521`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
