# `managedChromeCdpPortOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/chrome-discovery.ts` · [Module README](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705248-705273](../../../../../../../reference/runtime/host-main.cjs#L705248-L705273) | `FunctionDeclaration` | no | `process3, maxWindowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705248-705273](../../../../../../../reference/runtime/host-main.cjs#L705248-L705273) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:705248

Calls written directly in this body: `/^[1-9]\d*$/.test`, `Number`, `Number.isSafeInteger`, `lastSwitchValue`, `windowIndexForProfilePath`.

SHA-256 of the source span: `c4473b2e69461a7cae221d6c2f773594916e125c78786103c68c148912353d73`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
