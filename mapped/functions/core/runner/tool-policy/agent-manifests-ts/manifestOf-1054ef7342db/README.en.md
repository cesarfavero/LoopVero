# `manifestOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-manifests.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-manifests-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:543229-543236](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543229-L543236) | `FunctionDeclaration` | no | `kind, variant` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543229-543236](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543229-L543236) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:543229

Calls written directly in this body: `isSandSubagentDynamicToolsKind`, `isSandSubagentHistoryKind`.

SHA-256 of the source span: `84abfd8532058983e6615263d5b6302a495806454fba3538174304f41fb3dee0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
