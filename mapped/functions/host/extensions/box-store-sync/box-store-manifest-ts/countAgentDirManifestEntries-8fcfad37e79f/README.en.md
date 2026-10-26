# `countAgentDirManifestEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476878-476886](../../../../../../../reference/runtime/host-main.cjs#L476878-L476886) | `FunctionDeclaration` | no | `manifest` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476878-476886](../../../../../../../reference/runtime/host-main.cjs#L476878-L476886) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:476878

Calls written directly in this body: `AGENT_DIR_MANIFEST_KEY_RE.exec`, `ids.add`, `manifest.keys`, `new Set`.

SHA-256 of the source span: `64cbc55e295fa601e7bff9db5e9c86cc32bbbbd363531cbfa02862f067e92315`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
