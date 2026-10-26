# `resolvePrivateWorkerMachine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512790-512818](../../../../../../reference/runtime/host-main.cjs#L512790-L512818) | `FunctionDeclaration` | yes | `client, environment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512790-512818](../../../../../../reference/runtime/host-main.cjs#L512790-L512818) | 5 | 0 | 1 | 2 | 3 | 0 |

### host:512790

Calls written directly in this body: `ambiguousWorkersNote`, `cloudAgentWorkerNameLabel`, `connectedWorkersNote`, `environment.name.trim`, `listConnectedPrivateWorkers`, `new SandCloudAgentLaunchError`, `resolveCloudAgentMachineTarget`.

Explicit throw targets: `SandCloudAgentLaunchError`.

SHA-256 of the source span: `37a842cbed6abc3414a16732d91d054187377ed51271d39ffa9a0d65f50900df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
