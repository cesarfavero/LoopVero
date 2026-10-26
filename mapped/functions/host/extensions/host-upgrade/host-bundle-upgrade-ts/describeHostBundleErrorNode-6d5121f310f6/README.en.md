# `describeHostBundleErrorNode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-upgrade.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-upgrade-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681336-681352](../../../../../../../reference/runtime/host-main.cjs#L681336-L681352) | `FunctionDeclaration` | no | `err, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681336-681352](../../../../../../../reference/runtime/host-main.cjs#L681336-L681352) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:681336

Calls written directly in this body: `.join`, `.map`, `Array.isArray`, `aggregate.filter`, `err.message.includes`.

Assignment or increment targets: `node2`.

SHA-256 of the source span: `2b06f9c417e713c242d38993a5e90fdf454595b13f306fabdc28e9efdfee4cf1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
