# `computeHostUpgradeMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-marker.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681438-681465](../../../../../../../reference/runtime/host-main.cjs#L681438-L681465) | `FunctionDeclaration` | no | `marker17, nowMs2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681438-681465](../../../../../../../reference/runtime/host-main.cjs#L681438-L681465) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:681438

Calls written directly in this body: `Math.max`, `brandedErrorTag`, `brandedId`, `logFields`.

SHA-256 of the source span: `f9ae693665fc69638f8ce9743e3b7d69527be5716fcdfbce563a03306c7f7104`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
