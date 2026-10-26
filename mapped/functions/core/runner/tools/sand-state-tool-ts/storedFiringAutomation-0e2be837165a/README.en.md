# `storedFiringAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762697-762708](../../../../../../../reference/runtime/host-main.cjs#L762697-L762708) | `FunctionDeclaration` | no | `deps` |
| [evaluation:555307-555318](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555307-L555318) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762697-762708](../../../../../../../reference/runtime/host-main.cjs#L762697-L762708) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:555307-555318](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555307-L555318) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:762697

Calls written directly in this body: `.find`, `deps.activeAutomationWakeId`, `deps.automationStore.list`.

SHA-256 of the source span: `1f8bb527b9e9ca86a51a9d8888d75c40a20bc503db003f93a72cbf358d38f351`.

### evaluation:555307

Calls written directly in this body: `.find`, `deps.activeAutomationWakeId`, `deps.automationStore.list`.

SHA-256 of the source span: `1f8bb527b9e9ca86a51a9d8888d75c40a20bc503db003f93a72cbf358d38f351`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
