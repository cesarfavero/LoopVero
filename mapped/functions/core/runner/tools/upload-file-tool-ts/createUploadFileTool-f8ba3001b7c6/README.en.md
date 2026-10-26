# `createUploadFileTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774771-774807](../../../../../../../reference/runtime/host-main.cjs#L774771-L774807) | `FunctionDeclaration` | no | `deps` |
| [evaluation:574374-574410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574374-L574410) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774771-774807](../../../../../../../reference/runtime/host-main.cjs#L774771-L774807) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574374-574410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574374-L574410) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774771

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `854ca967fdfd024e52fd477a46f54b1afcc494253978e2c6997c8e57457e25dc`.

### evaluation:574374

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `2e93039f2b47dcd44095fe11bf2fc751304dbbf6b8da1b993e60c22a3058caee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
