# `nextIndexEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701916-701945](../../../../../../../reference/runtime/host-main.cjs#L701916-L701945) | `FunctionDeclaration` | no | `loaded, previous` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701916-701945](../../../../../../../reference/runtime/host-main.cjs#L701916-L701945) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:701916

Calls written directly in this body: `.filter`, `carriedOver`, `loaded.plugins.flatMap`, `new Set`, `pluginContentsToSkillRecords`.

SHA-256 of the source span: `a7a0dd7f2a0e909c74c426f9a8350ab75edf070e856fa82cb28626ad118ed79e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
