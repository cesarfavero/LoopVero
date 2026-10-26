# `HostUpgradeService.runHostBundleFetchStage/stage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-service.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681786-681794](../../../../../../../reference/runtime/host-main.cjs#L681786-L681794) | `ArrowFunctionExpression` | yes | `{ bytes, sha256 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681786-681794](../../../../../../../reference/runtime/host-main.cjs#L681786-L681794) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:681786

Calls written directly in this body: `this.deps.stageUpgrade`.

SHA-256 of the source span: `9c47c61ef01793bfb81ee2f748ad96851ea3d51ac336b0447f206b50cacf8407`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
