# `HostUpgradeService.runHostBundleFetchStage/reportUpgrade`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-service.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681795-681795](../../../../../../../reference/runtime/host-main.cjs#L681795-L681795) | `ArrowFunctionExpression` | no | `metadata2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681795-681795](../../../../../../../reference/runtime/host-main.cjs#L681795-L681795) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:681795 uses an implicit arrow-function return.

### host:681795

Calls written directly in this body: `this.deps.telemetry.reportHostUpgrade`.

SHA-256 of the source span: `b1d6f55ef0f2146f27885f1034308e78672e7603fb436182e53da7dd2b3190f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
