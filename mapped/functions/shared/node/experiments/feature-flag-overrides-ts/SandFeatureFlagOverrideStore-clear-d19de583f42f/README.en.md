# `SandFeatureFlagOverrideStore.clear`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/feature-flag-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552219-552221](../../../../../../../reference/runtime/host-main.cjs#L552219-L552221) | `method` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552219-552221](../../../../../../../reference/runtime/host-main.cjs#L552219-L552221) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:552219

Calls written directly in this body: `this.overrides.delete`.

SHA-256 of the source span: `6b01fab51bcc45ad315921e4f9256f66f8fa1646e7dbe5d83f69facbae27ec99`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
