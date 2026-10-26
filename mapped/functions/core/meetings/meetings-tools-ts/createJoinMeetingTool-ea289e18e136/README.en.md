# `createJoinMeetingTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773548-773560](../../../../../../reference/runtime/host-main.cjs#L773548-L773560) | `FunctionDeclaration` | no | `deps` |
| [evaluation:572774-572786](../../../../../../reference/runtime/sand-eval-runner.cjs#L572774-L572786) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773548-773560](../../../../../../reference/runtime/host-main.cjs#L773548-L773560) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572774-572786](../../../../../../reference/runtime/sand-eval-runner.cjs#L572774-L572786) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773548

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `14f7cb9273ce7dd4a509e549e83bba7f7db0a86a90794e254bbf362e07d352b9`.

### evaluation:572774

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `14f7cb9273ce7dd4a509e549e83bba7f7db0a86a90794e254bbf362e07d352b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
