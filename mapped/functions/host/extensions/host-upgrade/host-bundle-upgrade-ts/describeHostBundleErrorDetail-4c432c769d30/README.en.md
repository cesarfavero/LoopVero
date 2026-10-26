# `describeHostBundleErrorDetail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-upgrade.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-upgrade-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681353-681369](../../../../../../../reference/runtime/host-main.cjs#L681353-L681369) | `FunctionDeclaration` | no | `error64, phase` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681353-681369](../../../../../../../reference/runtime/host-main.cjs#L681353-L681369) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:681353

Calls written directly in this body: `String`, `describeHostBundleErrorNode`, `new Set`, `parts.join`, `parts.push`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `951de67c6fbfc10c2994f1284d9ffb7124dc19e69bfa82f5eb51aa871d57c2b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
