# `SandFeatureFlagOverrideStore.replaceAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/feature-flag-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552235-552242](../../../../../../../reference/runtime/host-main.cjs#L552235-L552242) | `method` | no | `overrides` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552235-552242](../../../../../../../reference/runtime/host-main.cjs#L552235-L552242) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:552235

Calls written directly in this body: `Object.entries`, `this.clock.now`, `this.isFlagName`, `this.overrides.clear`, `this.overrides.set`.

SHA-256 of the source span: `4dc1a41d0d3f6695f5dcb1db7275ea481941f4aae77a78ac644a51a3ec7f6780`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
