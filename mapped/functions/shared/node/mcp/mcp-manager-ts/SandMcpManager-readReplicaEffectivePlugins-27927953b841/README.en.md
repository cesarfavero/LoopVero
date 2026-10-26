# `SandMcpManager.readReplicaEffectivePlugins`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689881-689889](../../../../../../../reference/runtime/host-main.cjs#L689881-L689889) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689881-689889](../../../../../../../reference/runtime/host-main.cjs#L689881-L689889) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:689881

Calls written directly in this body: `reportMcpHostEdgeFailure`, `this.effectivePluginsProvider`.

SHA-256 of the source span: `a0fc04c0510fae74434ec85954533ec11cf38dc3ddb09bb343421c8898ef5010`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
