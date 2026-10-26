# `hostBundleDigestUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-source.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681167-681169](../../../../../../../reference/runtime/host-main.cjs#L681167-L681169) | `FunctionDeclaration` | no | `version4, base = SAND_HOST_BUNDLE_PUBLIC_BASE_URL` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681167-681169](../../../../../../../reference/runtime/host-main.cjs#L681167-L681169) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:681167

Calls written directly in this body: `hostBundleTarballUrl`.

SHA-256 of the source span: `d2a1b1a8ac246aea123dfa42a54cf723225d20fa5001626d000d2b42d779a878`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
