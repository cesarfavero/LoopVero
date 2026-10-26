# `executeBoxCopyInFromEnv/getMachineId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483297-483303](../../../../../../../reference/runtime/host-main.cjs#L483297-L483303) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483297-483303](../../../../../../../reference/runtime/host-main.cjs#L483297-L483303) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:483297 uses an implicit arrow-function return.

### host:483297

Calls written directly in this body: `getHostSecretsPath`, `getOrCreateHostMachineId`, `noFollowRootFor`.

SHA-256 of the source span: `204a9ac87df42f862218aaf24bea60de45b5cbbf5170f2a25e57c13e07fbef0c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
