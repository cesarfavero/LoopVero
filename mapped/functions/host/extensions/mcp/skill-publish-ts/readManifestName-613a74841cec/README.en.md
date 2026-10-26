# `readManifestName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702356-702368](../../../../../../../reference/runtime/host-main.cjs#L702356-L702368) | `FunctionDeclaration` | yes | `pluginDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702356-702368](../../../../../../../reference/runtime/host-main.cjs#L702356-L702368) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:702356

Calls written directly in this body: `JSON.parse`, `manifest.name.trim`, `reportFallbackUnlessAbsent`.

SHA-256 of the source span: `6db0a1f358bca67f7a3a6a086c93e7e9d3d36e0e4b5217f729a9d14c0f5a9f3e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
