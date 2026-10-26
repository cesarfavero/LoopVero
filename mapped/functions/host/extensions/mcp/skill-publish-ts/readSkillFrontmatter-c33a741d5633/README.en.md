# `readSkillFrontmatter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702343-702355](../../../../../../../reference/runtime/host-main.cjs#L702343-L702355) | `FunctionDeclaration` | no | `filePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702343-702355](../../../../../../../reference/runtime/host-main.cjs#L702343-L702355) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:702343

Calls written directly in this body: `new SandSkillPublishError`, `parseSkillFile`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `parsed2`.

Explicit throw targets: `SandSkillPublishError`.

SHA-256 of the source span: `6c4bca53f9f75c5741327feb461c31fdeaa43a1ced9ebd67bb6954d41503d3c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
