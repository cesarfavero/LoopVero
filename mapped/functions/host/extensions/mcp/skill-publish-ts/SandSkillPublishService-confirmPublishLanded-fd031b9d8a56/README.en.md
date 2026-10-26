# `SandSkillPublishService.confirmPublishLanded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702296-702305](../../../../../../../reference/runtime/host-main.cjs#L702296-L702305) | `method` | yes | `published` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702296-702305](../../../../../../../reference/runtime/host-main.cjs#L702296-L702305) | 1 | 1 | 1 | 2 | 0 | 0 |

### host:702296

Calls written directly in this body: `.skills.find`, `this.options.pluginSkills.currentIndex`, `this.syncBestEffort`.

Assignment or increment targets: `attempt`.

SHA-256 of the source span: `a033bdf1b371af89d4b230c318171c16fa42e19af67028e179e89c418f08f4ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
