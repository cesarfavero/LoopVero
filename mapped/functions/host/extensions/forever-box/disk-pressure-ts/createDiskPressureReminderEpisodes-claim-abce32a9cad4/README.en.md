# `createDiskPressureReminderEpisodes/claim`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/disk-pressure.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/disk-pressure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679865-679879](../../../../../../../reference/runtime/host-main.cjs#L679865-L679879) | `FunctionExpression` | no | `{ agentId: rawAgentId, claimId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679865-679879](../../../../../../../reference/runtime/host-main.cjs#L679865-L679879) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:679865

Calls written directly in this body: `claims.get`, `claims.set`, `enqueue`, `handledAgentIds.has`, `parseAgentId`, `pendingEpisodeIds.get`, `persist`.

SHA-256 of the source span: `e3b79a24f0e3a00e2e236910302abd0ba4900d63bea950deff6dd06c669cdcb4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
