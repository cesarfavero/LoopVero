# `SandSkillPublishService.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702125-702128](../../../../../../../reference/runtime/host-main.cjs#L702125-L702128) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702125-702128](../../../../../../../reference/runtime/host-main.cjs#L702125-L702128) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:702125

Calls written directly in this body: `getGlobalSkillsDir`, `new GlobalSkillLibrary`.

Assignment or increment targets: `this.library`, `this.options`.

SHA-256 of the source span: `8c7c75e977bf579b71e3aebfb32e553a1750fa66e46e55256a8c145876d0a794`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
