# `readLocalHostVersion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-upgrade.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-upgrade-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681239-681247](../../../../../../../reference/runtime/host-main.cjs#L681239-L681247) | `FunctionDeclaration` | yes | `versionPath = SAND_BOX_HOST_VERSION_PATH` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681239-681247](../../../../../../../reference/runtime/host-main.cjs#L681239-L681247) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:681239

Calls written directly in this body: `.trim`, `reportFallbackUnlessAbsent`.

SHA-256 of the source span: `bb150bfc2f81380601d77282840426cf71fbe3d112ae2908beae6a2f91c74bfe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
