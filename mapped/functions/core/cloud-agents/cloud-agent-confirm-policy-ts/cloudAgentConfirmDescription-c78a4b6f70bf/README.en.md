# `cloudAgentConfirmDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-confirm-policy.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-confirm-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770054-770066](../../../../../../reference/runtime/host-main.cjs#L770054-L770066) | `FunctionDeclaration` | no | `{   durableWatch,   publishRepository = false,   agentScope = "launched" }` |
| [evaluation:566864-566876](../../../../../../reference/runtime/sand-eval-runner.cjs#L566864-L566876) | `FunctionDeclaration` | no | `{   durableWatch,   publishRepository = false,   agentScope = "launched" }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770054-770066](../../../../../../reference/runtime/host-main.cjs#L770054-L770066) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:566864-566876](../../../../../../reference/runtime/sand-eval-runner.cjs#L566864-L566876) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:770054

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `07a9c9c49db18136a25255a949621b52e50dbb6889e90a3d2248164503dde374`.

### evaluation:566864

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `07a9c9c49db18136a25255a949621b52e50dbb6889e90a3d2248164503dde374`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
