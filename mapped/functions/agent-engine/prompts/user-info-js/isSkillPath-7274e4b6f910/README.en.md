# `isSkillPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639768-639779](../../../../../../reference/runtime/host-main.cjs#L639768-L639779) | `FunctionDeclaration` | no | `path33` |
| [evaluation:430382-430393](../../../../../../reference/runtime/sand-eval-runner.cjs#L430382-L430393) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639768-639779](../../../../../../reference/runtime/host-main.cjs#L639768-L639779) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430382-430393](../../../../../../reference/runtime/sand-eval-runner.cjs#L430382-L430393) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:639768

Calls written directly in this body: `SKILL_GLOB_MATCHERS.some`, `path33.replace`, `skillPathCache.clear`, `skillPathCache.get`, `skillPathCache.set`.

Assignment or increment targets: `isSkill`.

SHA-256 of the source span: `9607214540b92e4ad78ee39d9db17fdcf8fe89918fe45819871db0f9ebbf70bb`.

### evaluation:430382

Calls written directly in this body: `SKILL_GLOB_MATCHERS.some`, `path33.replace`, `skillPathCache.clear`, `skillPathCache.get`, `skillPathCache.set`.

Assignment or increment targets: `isSkill`.

SHA-256 of the source span: `9607214540b92e4ad78ee39d9db17fdcf8fe89918fe45819871db0f9ebbf70bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
