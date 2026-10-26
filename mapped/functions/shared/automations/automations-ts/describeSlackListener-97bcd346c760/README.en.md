# `describeSlackListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485514-485532](../../../../../../reference/runtime/host-main.cjs#L485514-L485532) | `FunctionDeclaration` | no | `listener` |
| [evaluation:475244-475262](../../../../../../reference/runtime/sand-eval-runner.cjs#L475244-L475262) | `FunctionDeclaration` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485514-485532](../../../../../../reference/runtime/host-main.cjs#L485514-L485532) | 7 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:475244-475262](../../../../../../reference/runtime/sand-eval-runner.cjs#L475244-L475262) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:485514

Calls written directly in this body: `describeSlackScope`, `emoji3.map`, `joinWithOr`.

SHA-256 of the source span: `e75eda9797acdd380f95700a5d0f47c2a0bfc75db3fdb6a030cba1b1ce81e97f`.

### evaluation:475244

Calls written directly in this body: `describeSlackScope`, `emoji3.map`, `joinWithOr`.

SHA-256 of the source span: `e75eda9797acdd380f95700a5d0f47c2a0bfc75db3fdb6a030cba1b1ce81e97f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
