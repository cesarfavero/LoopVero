# `windowIndexForProfilePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/chrome-discovery.ts` · [Module README](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705347-705360](../../../../../../../reference/runtime/host-main.cjs#L705347-L705360) | `FunctionDeclaration` | no | `profilePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705347-705360](../../../../../../../reference/runtime/host-main.cjs#L705347-L705360) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:705347

Calls written directly in this body: `/^[1-9]\d*$/.test`, `Number`, `Number.isSafeInteger`, `profilePath.slice`, `profilePath.startsWith`.

SHA-256 of the source span: `8e975850308b1255733c4db620c9653aa2072471526ddcab2bb023ed2bf457e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
