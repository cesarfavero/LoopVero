# `createVaultTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768110-768152](../../../../../../../../reference/runtime/host-main.cjs#L768110-L768152) | `FunctionDeclaration` | no | `deps` |
| [evaluation:563626-563668](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563626-L563668) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768110-768152](../../../../../../../../reference/runtime/host-main.cjs#L768110-L768152) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563626-563668](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563626-L563668) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768110

Calls written directly in this body: `defineCommunicateTool`, `description6`, `vaultConciseContext`, `vaultToolParameters`.

SHA-256 of the source span: `66c9f1a323392e0ef31a9f20cf22d38f73affb26bfdc0528c9e222f83b21f2b9`.

### evaluation:563626

Calls written directly in this body: `defineCommunicateTool`, `description6`, `vaultConciseContext`, `vaultToolParameters`.

SHA-256 of the source span: `66c9f1a323392e0ef31a9f20cf22d38f73affb26bfdc0528c9e222f83b21f2b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
