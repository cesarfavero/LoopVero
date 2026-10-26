# `createListAvailableSecureValuesTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767304-767349](../../../../../../../../reference/runtime/host-main.cjs#L767304-L767349) | `FunctionDeclaration` | no | `deps` |
| [evaluation:562823-562868](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562823-L562868) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767304-767349](../../../../../../../../reference/runtime/host-main.cjs#L767304-L767349) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562823-562868](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562823-L562868) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767304

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `d118f78319cc0a93a90e7e70d2190c39a443a6639d838948e85aa6aa51c55dc3`.

### evaluation:562823

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `d118f78319cc0a93a90e7e70d2190c39a443a6639d838948e85aa6aa51c55dc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
