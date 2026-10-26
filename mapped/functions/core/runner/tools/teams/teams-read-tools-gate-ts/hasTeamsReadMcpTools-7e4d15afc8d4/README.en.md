# `hasTeamsReadMcpTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/teams-read-tools-gate.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/teams-read-tools-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768181-768183](../../../../../../../../reference/runtime/host-main.cjs#L768181-L768183) | `FunctionDeclaration` | no | `mcpTools` |
| [evaluation:563697-563699](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563697-L563699) | `FunctionDeclaration` | no | `mcpTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768181-768183](../../../../../../../../reference/runtime/host-main.cjs#L768181-L768183) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563697-563699](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563697-L563699) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768181

Calls written directly in this body: `hasChannelReadMcpTools`.

SHA-256 of the source span: `5c949a60e668b64a2e08baf525003ff8e3180c3bc8eb3b1adeb99a64a20197a2`.

### evaluation:563697

Calls written directly in this body: `hasChannelReadMcpTools`.

SHA-256 of the source span: `5c949a60e668b64a2e08baf525003ff8e3180c3bc8eb3b1adeb99a64a20197a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
