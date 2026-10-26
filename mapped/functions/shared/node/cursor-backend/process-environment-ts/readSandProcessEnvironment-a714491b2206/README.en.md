# `readSandProcessEnvironment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/process-environment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/process-environment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451682-451722](../../../../../../../reference/runtime/host-main.cjs#L451682-L451722) | `FunctionDeclaration` | no | `env, clientSource, platform2 = process.platform` |
| [evaluation:597213-597253](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597213-L597253) | `FunctionDeclaration` | no | `env, clientSource, platform = process.platform` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451682-451722](../../../../../../../reference/runtime/host-main.cjs#L451682-L451722) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597213-597253](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597213-L597253) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451682

Calls written directly in this body: `parseGateOverrides`, `parseGroupChatDiscouragementPolicy`, `resolveBoxComputerEntry`, `resolveBoxComputerRuntime`, `resolveEgressTunnelEnvConfig`, `sandBackendIdentityOf`, `sandIsolatedDeploymentOf`, `sandVariantOf`.

SHA-256 of the source span: `706c561667cfcd6696bd50a307e834223adff40e8ca01a18a9a5e70e1d7b4a1f`.

### evaluation:597213

Calls written directly in this body: `parseGateOverrides`, `parseGroupChatDiscouragementPolicy`, `resolveBoxComputerEntry`, `resolveBoxComputerRuntime`, `resolveEgressTunnelEnvConfig`, `sandBackendIdentityOf`, `sandIsolatedDeploymentOf`, `sandVariantOf`.

SHA-256 of the source span: `88c22aa041c8b46df977650a2c85e4f4f19274aec44bc4eda4d29b41d2c58337`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
