# `readPluginSkillFileFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720837-720865](../../../../../../reference/runtime/host-main.cjs#L720837-L720865) | `FunctionDeclaration` | no | `pluginsRoot, filePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720837-720865](../../../../../../reference/runtime/host-main.cjs#L720837-L720865) | 1 | 0 | 0 | 3 | 0 | 2 |

### host:720837

Calls written directly in this body: `.filter`, `.map`, `.sort`, `parseSkillFile`, `readFileWithinSync`, `reportFallbackUnlessAbsent`, `resolveWithinSync`.

Assignment or increment targets: `helperScripts`, `raw`, `skillDir`.

SHA-256 of the source span: `e6cc69d38dbee882aa3ad8b5f973c3d2790c5f11609f7409546c4e7934e5a3e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
