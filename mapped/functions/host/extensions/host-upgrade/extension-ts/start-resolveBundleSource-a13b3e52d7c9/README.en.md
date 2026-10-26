# `start/resolveBundleSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/extension.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681877-681881](../../../../../../../reference/runtime/host-main.cjs#L681877-L681881) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681877-681881](../../../../../../../reference/runtime/host-main.cjs#L681877-L681881) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:681877 uses an implicit arrow-function return.

### host:681877

Calls written directly in this body: `hostBundleBaseUrl`, `resolveChannel`, `resolveHostBundleSource`.

SHA-256 of the source span: `7e48cb28c3d869fa0e2b1be567c03472d3f1517ba048cf286fa95687a70aeb8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
