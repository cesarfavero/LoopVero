# `createRemapUserFormTargetsTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-remap-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-remap-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778420-778451](../../../../../../../reference/runtime/host-main.cjs#L778420-L778451) | `FunctionDeclaration` | no | `deps` |
| [evaluation:578154-578185](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578154-L578185) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778420-778451](../../../../../../../reference/runtime/host-main.cjs#L778420-L778451) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578154-578185](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578154-L578185) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778420

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `a66d05b7906bd00219094da89a751e883671a172c390cdd333ab998b0fae795e`.

### evaluation:578154

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `a66d05b7906bd00219094da89a751e883671a172c390cdd333ab998b0fae795e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
