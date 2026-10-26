# `createSortMemoriesTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754298-754410](../../../../../../../reference/runtime/host-main.cjs#L754298-L754410) | `FunctionDeclaration` | no | `deps` |
| [evaluation:536766-536878](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536766-L536878) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754298-754410](../../../../../../../reference/runtime/host-main.cjs#L754298-L754410) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536766-536878](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536766-L536878) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754298

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `9e08785368c8b92006c2f0c43b1ba09d94a42bbd988d9c11e0c1e01c145e7827`.

### evaluation:536766

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `43df225aeb5b3f5041bbdc133473ba563a05e725c90a1848bb461bd88138bd3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
