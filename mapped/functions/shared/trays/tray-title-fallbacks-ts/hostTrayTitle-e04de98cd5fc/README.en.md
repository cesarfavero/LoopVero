# `hostTrayTitle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/tray-title-fallbacks.ts` · [Module README](../../../../../modules/shared/trays/tray-title-fallbacks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505129-505140](../../../../../../reference/runtime/host-main.cjs#L505129-L505140) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505129-505140](../../../../../../reference/runtime/host-main.cjs#L505129-L505140) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:505129

Calls written directly in this body: `automationFailedTitleFallback`, `trayTitleFallback`.

SHA-256 of the source span: `d09c1a22ea21f50b700bc656376d0188fe81d8036a65ed18217cf948f37a5a90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
