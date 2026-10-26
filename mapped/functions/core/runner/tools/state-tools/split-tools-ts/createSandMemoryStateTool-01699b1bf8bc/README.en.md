# `createSandMemoryStateTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771713-771736](../../../../../../../../reference/runtime/host-main.cjs#L771713-L771736) | `FunctionDeclaration` | no | `deps, {   vaultContacts = false,   memoryTypes = enabledMemoryTypes() } = {}` |
| [evaluation:570946-570969](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570946-L570969) | `FunctionDeclaration` | no | `deps, {   vaultContacts = false,   memoryTypes = enabledMemoryTypes() } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771713-771736](../../../../../../../../reference/runtime/host-main.cjs#L771713-L771736) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570946-570969](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570946-L570969) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771713

Calls written directly in this body: `Object.assign`, `defineCommunicateTool`, `isTeamBot`, `memoryDescription`, `memoryParameters`.

SHA-256 of the source span: `1f85e2a5b4b3bb9538d2e60e873463c710a5dc2e102ad2e731e8f0506c668c0e`.

### evaluation:570946

Calls written directly in this body: `Object.assign`, `defineCommunicateTool`, `isTeamBot`, `memoryDescription`, `memoryParameters`.

SHA-256 of the source span: `1f85e2a5b4b3bb9538d2e60e873463c710a5dc2e102ad2e731e8f0506c668c0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
