# `fetchHostBundleDigest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-source.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681188-681203](../../../../../../../reference/runtime/host-main.cjs#L681188-L681203) | `FunctionDeclaration` | yes | `fetchFn, version4, base` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681188-681203](../../../../../../../reference/runtime/host-main.cjs#L681188-L681203) | 2 | 0 | 2 | 1 | 2 | 0 |

### host:681188

Calls written directly in this body: `fetchFn`, `hostBundleDigestUrl`, `new SandHostBundleSourceError`, `parseSandHostBundleDigest`, `resp.text`.

Explicit throw targets: `SandHostBundleSourceError`.

SHA-256 of the source span: `381c074d3e871ca1665597469903b52e7364511a1927c44e3456feaa9aa1e6f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
