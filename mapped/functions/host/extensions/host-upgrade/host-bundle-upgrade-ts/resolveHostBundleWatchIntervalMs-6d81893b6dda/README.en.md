# `resolveHostBundleWatchIntervalMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-upgrade.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-upgrade-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681374-681386](../../../../../../../reference/runtime/host-main.cjs#L681374-L681386) | `FunctionDeclaration` | no | `liveConfiguredMs, singleBoxDevOverride` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681374-681386](../../../../../../../reference/runtime/host-main.cjs#L681374-L681386) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:681374

Calls written directly in this body: `Math.max`, `Math.min`, `Math.round`, `Number.isFinite`, `Number.isInteger`, `Number.parseInt`.

SHA-256 of the source span: `e3f7c14ff2a0440b98d20d9530097325fa5e700dbdc1913617ad8a9a9fbc00f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
