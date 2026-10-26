# `HostUpgradeService.runHostBundleFetchStage/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-service.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681796-681796](../../../../../../../reference/runtime/host-main.cjs#L681796-L681796) | `ArrowFunctionExpression` | no | `level, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681796-681796](../../../../../../../reference/runtime/host-main.cjs#L681796-L681796) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:681796 uses an implicit arrow-function return.

### host:681796

Calls written directly in this body: `this.deps.log`.

SHA-256 of the source span: `3788c4dd3b93ebd215ba3de2d9af8e48cf3edb3dfa283194f104f2afbd25d948`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
