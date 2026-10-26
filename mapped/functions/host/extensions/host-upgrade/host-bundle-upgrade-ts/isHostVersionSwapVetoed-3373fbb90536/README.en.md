# `isHostVersionSwapVetoed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-upgrade.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-upgrade-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681311-681323](../../../../../../../reference/runtime/host-main.cjs#L681311-L681323) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681311-681323](../../../../../../../reference/runtime/host-main.cjs#L681311-L681323) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:681311

Calls written directly in this body: `hostUpgradeAckFilename`, `reportFallbackUnlessAbsent`.

SHA-256 of the source span: `feafd51ec01842421c19d57e678a5761ecb64ccd4160beff4b77e2169ba00c64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
