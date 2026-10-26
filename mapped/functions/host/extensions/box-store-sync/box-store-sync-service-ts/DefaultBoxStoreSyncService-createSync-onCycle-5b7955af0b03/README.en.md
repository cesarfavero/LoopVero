# `DefaultBoxStoreSyncService.createSync/onCycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482575-482575](../../../../../../../reference/runtime/host-main.cjs#L482575-L482575) | `ArrowFunctionExpression` | no | `summary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482575-482575](../../../../../../../reference/runtime/host-main.cjs#L482575-L482575) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:482575 uses an implicit arrow-function return.

### host:482575

Calls written directly in this body: `this.deps.telemetry.reportBoxStoreSyncCycle`.

SHA-256 of the source span: `a04c7e2ed0cd8cfb7f4d9e30d0ae8bb6593e7f78242cd5535700e71284b45784`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
