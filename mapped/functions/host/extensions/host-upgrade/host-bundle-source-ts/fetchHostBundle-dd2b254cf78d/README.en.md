# `fetchHostBundle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-source.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681204-681223](../../../../../../../reference/runtime/host-main.cjs#L681204-L681223) | `FunctionDeclaration` | yes | `fetchFn, version4, base` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681204-681223](../../../../../../../reference/runtime/host-main.cjs#L681204-L681223) | 3 | 0 | 3 | 1 | 3 | 0 |

### host:681204

Calls written directly in this body: `SHORT_GIT_SHA_REGEX.test`, `fetchFn`, `fetchHostBundleDigest`, `hostBundleTarballUrl`, `new SandHostBundleSourceError`, `new Uint8Array`, `resp.arrayBuffer`.

Explicit throw targets: `SandHostBundleSourceError`.

SHA-256 of the source span: `0ced48d81061d2b3164e307946aad39032fd1111a800055b996c102d707d9302`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
