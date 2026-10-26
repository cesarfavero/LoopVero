# `readsAsOwnedProject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-confirm-policy.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-confirm-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566810-566820](../../../../../../reference/runtime/sand-eval-runner.cjs#L566810-L566820) | `FunctionDeclaration` | yes | `api, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566810-566820](../../../../../../reference/runtime/sand-eval-runner.cjs#L566810-L566820) | 0 | 0 | 1 | 2 | 0 | 1 |

### evaluation:566810

Calls written directly in this body: `api.get`, `errorLogTag`, `isOwnedCloudAgentProject`, `process.stderr.write`.

SHA-256 of the source span: `a6bd57813f71b7ad11bf6bf67df473e8ed0c22338ced815805fe77a8117dc3d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
