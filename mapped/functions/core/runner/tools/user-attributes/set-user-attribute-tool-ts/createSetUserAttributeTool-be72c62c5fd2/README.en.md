# `createSetUserAttributeTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-attributes/set-user-attribute-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/user-attributes/set-user-attribute-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771506-771531](../../../../../../../../reference/runtime/host-main.cjs#L771506-L771531) | `FunctionDeclaration` | no | `deps` |
| [evaluation:570739-570764](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570739-L570764) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771506-771531](../../../../../../../../reference/runtime/host-main.cjs#L771506-L771531) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570739-570764](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570739-L570764) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771506

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `baab0d8535bcbafbcf36cff03ddce0a85fbed5c593efdac89f0a74ba00e53c5a`.

### evaluation:570739

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `bcc0a8cfa1fef36d15ea46f2df1262c2b39338b18aab1407ec5d2dc67604ded0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
