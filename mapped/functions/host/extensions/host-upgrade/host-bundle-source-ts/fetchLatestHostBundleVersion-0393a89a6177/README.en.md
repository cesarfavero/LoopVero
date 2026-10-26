# `fetchLatestHostBundleVersion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-source.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681171-681187](../../../../../../../reference/runtime/host-main.cjs#L681171-L681187) | `FunctionDeclaration` | yes | `fetchFn = fetch, channel = resolveHostBundleChannel(), base = SAND_HOST_BUNDLE_PUBLIC_BASE_URL` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681171-681187](../../../../../../../reference/runtime/host-main.cjs#L681171-L681187) | 3 | 0 | 2 | 5 | 0 | 1 |

### host:681171

Calls written directly in this body: `.trim`, `Date.now`, `SHORT_GIT_SHA_REGEX.test`, `cachedVersions.get`, `cachedVersions.set`, `fetchFn`, `hostBundleVersionUrl`, `reportFallback`, `resp.text`.

SHA-256 of the source span: `7ca0f1f261ca8c5f876274a139c80046e152d119cc31d834813cbcb097c877ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
