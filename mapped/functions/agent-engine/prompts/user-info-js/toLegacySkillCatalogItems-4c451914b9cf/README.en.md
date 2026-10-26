# `toLegacySkillCatalogItems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640110-640118](../../../../../../reference/runtime/host-main.cjs#L640110-L640118) | `FunctionDeclaration` | no | `skills` |
| [evaluation:430724-430732](../../../../../../reference/runtime/sand-eval-runner.cjs#L430724-L430732) | `FunctionDeclaration` | no | `skills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640110-640118](../../../../../../reference/runtime/host-main.cjs#L640110-L640118) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430724-430732](../../../../../../reference/runtime/sand-eval-runner.cjs#L430724-L430732) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640110

Calls written directly in this body: `skills.map`.

SHA-256 of the source span: `f638b6a3d5718c5737cd34d2a7feac034a159f66e3ec4919e57182d3c1367077`.

### evaluation:430724

Calls written directly in this body: `skills.map`.

SHA-256 of the source span: `f638b6a3d5718c5737cd34d2a7feac034a159f66e3ec4919e57182d3c1367077`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
