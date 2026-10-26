# `pluginContentsToSkillRecords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701697-701732](../../../../../../../reference/runtime/host-main.cjs#L701697-L701732) | `FunctionDeclaration` | no | `plugins, publisherFacts = /* @__PURE__ */ new Map()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701697-701732](../../../../../../../reference/runtime/host-main.cjs#L701697-L701732) | 5 | 3 | 0 | 1 | 0 | 0 |

### host:701697

Calls written directly in this body: `clampSkillDescription`, `clampSkillName`, `getPluginDbId`, `new Set`, `pluginVersionOf`, `publisherFacts.get`, `records2.push`, `skillNameFromPath2`, `slugifySkillName`, `usedIds.add`, `usedIds.has`.

Assignment or increment targets: `id`, `suffix`.

SHA-256 of the source span: `a7d7d11d36f9e7caea1a1c41a5d3fc45a71a16953d7faf9ed81ec23aad98f8a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
