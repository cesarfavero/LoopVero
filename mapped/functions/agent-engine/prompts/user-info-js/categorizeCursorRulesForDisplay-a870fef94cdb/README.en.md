# `categorizeCursorRulesForDisplay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640643-640650](../../../../../../reference/runtime/host-main.cjs#L640643-L640650) | `FunctionDeclaration` | no | `cursorRules, workspacePaths, displayOptions, featureFlags, metricsCtx, omitSkills` |
| [evaluation:431257-431264](../../../../../../reference/runtime/sand-eval-runner.cjs#L431257-L431264) | `FunctionDeclaration` | no | `cursorRules, workspacePaths, displayOptions, featureFlags, metricsCtx, omitSkills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640643-640650](../../../../../../reference/runtime/host-main.cjs#L640643-L640650) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431257-431264](../../../../../../reference/runtime/sand-eval-runner.cjs#L431257-L431264) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640643

Calls written directly in this body: `categorizeCursorRules`.

SHA-256 of the source span: `8fde553beeefd08efc8760e9044918b1ff3327bea779d0e913160b6cd680a3d6`.

### evaluation:431257

Calls written directly in this body: `categorizeCursorRules`.

SHA-256 of the source span: `8fde553beeefd08efc8760e9044918b1ff3327bea779d0e913160b6cd680a3d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
