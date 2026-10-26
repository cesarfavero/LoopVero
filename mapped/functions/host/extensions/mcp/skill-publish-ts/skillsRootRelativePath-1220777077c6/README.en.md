# `skillsRootRelativePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702378-702385](../../../../../../../reference/runtime/host-main.cjs#L702378-L702385) | `FunctionDeclaration` | no | `skillRelativePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702378-702385](../../../../../../../reference/runtime/host-main.cjs#L702378-L702385) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:702378

Calls written directly in this body: `.filter`, `.split`, `new SandSkillPublishError`, `segments.slice`, `withoutRoot.join`.

Explicit throw targets: `SandSkillPublishError`.

SHA-256 of the source span: `2b29579ef08b7e7c847001cf63af77de71ff3c975cf5fd4e719bae8e8ff94a95`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
