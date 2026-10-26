# `SandSkillPublishService.requireLibraryRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702306-702312](../../../../../../../reference/runtime/host-main.cjs#L702306-L702312) | `method` | no | `workflowId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702306-702312](../../../../../../../reference/runtime/host-main.cjs#L702306-L702312) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:702306

Calls written directly in this body: `new SandSkillPublishError`, `this.library.get`.

Explicit throw targets: `SandSkillPublishError`.

SHA-256 of the source span: `84f378f5d3cf8241a1f152f48dd703d420332017117139cf876b7eca495152c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
