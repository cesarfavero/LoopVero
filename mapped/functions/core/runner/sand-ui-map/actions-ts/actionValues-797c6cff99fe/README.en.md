# `actionValues`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557887-557893](../../../../../../../reference/runtime/host-main.cjs#L557887-L557893) | `FunctionDeclaration` | no | `action, facts` |
| [evaluation:550695-550701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550695-L550701) | `FunctionDeclaration` | no | `action, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557887-557893](../../../../../../../reference/runtime/host-main.cjs#L557887-L557893) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:550695-550701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550695-L550701) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:557887

Calls written directly in this body: `action.values.filter`, `new Set`, `taughtOverviewTabIds2`.

SHA-256 of the source span: `0c0f6a632ff73b4d70f1267c7005f107d6745e3f98a2b15a217364d78c350790`.

### evaluation:550695

Calls written directly in this body: `action.values.filter`, `new Set`, `taughtOverviewTabIds2`.

SHA-256 of the source span: `0c0f6a632ff73b4d70f1267c7005f107d6745e3f98a2b15a217364d78c350790`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
