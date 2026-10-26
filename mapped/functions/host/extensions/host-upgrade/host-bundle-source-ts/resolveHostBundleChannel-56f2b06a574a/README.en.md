# `resolveHostBundleChannel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-source.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681157-681160](../../../../../../../reference/runtime/host-main.cjs#L681157-L681160) | `FunctionDeclaration` | no | `liveConfiguredChannel` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681157-681160](../../../../../../../reference/runtime/host-main.cjs#L681157-L681160) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:681157

Calls written directly in this body: `coerceSandHostBundleChannel`, `liveConfiguredChannel.trim`.

SHA-256 of the source span: `f3b88d1ecd5c40acd256f8f3797bfcd0134259e4d7a5fb4d1ab6dc96e76ddee5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
