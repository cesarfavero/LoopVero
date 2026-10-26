# `isBotSkillsPluginSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/plugin-skills.ts` · [Module README](../../../../../modules/core/skills/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:753911-753913](../../../../../../reference/runtime/host-main.cjs#L753911-L753913) | `FunctionDeclaration` | no | `skill` |
| [evaluation:534871-534873](../../../../../../reference/runtime/sand-eval-runner.cjs#L534871-L534873) | `FunctionDeclaration` | no | `skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:753911-753913](../../../../../../reference/runtime/host-main.cjs#L753911-L753913) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534871-534873](../../../../../../reference/runtime/sand-eval-runner.cjs#L534871-L534873) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:753911

Calls written directly in this body: `BOT_SKILLS_PLUGIN_PATH.test`.

SHA-256 of the source span: `0458990853bd7ade18c4d760dbae88ea69ab49b12623deb342fd259e0af8d849`.

### evaluation:534871

Calls written directly in this body: `BOT_SKILLS_PLUGIN_PATH.test`.

SHA-256 of the source span: `0458990853bd7ade18c4d760dbae88ea69ab49b12623deb342fd259e0af8d849`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
