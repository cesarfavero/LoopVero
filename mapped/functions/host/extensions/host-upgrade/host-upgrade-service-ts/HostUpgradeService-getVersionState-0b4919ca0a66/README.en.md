# `HostUpgradeService.getVersionState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-service.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681600-681606](../../../../../../../reference/runtime/host-main.cjs#L681600-L681606) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681600-681606](../../../../../../../reference/runtime/host-main.cjs#L681600-L681606) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:681600

Calls written directly in this body: `isSandHostUpgradeAvailable`.

SHA-256 of the source span: `b10dc8f42a125b4f4cd6943eb1afd5884abe32acc3199ba6231f824ffd40f3dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
