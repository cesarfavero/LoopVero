# `AgentSkillsSectionLayout`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640076-640083](../../../../../../reference/runtime/host-main.cjs#L640076-L640083) | `FunctionDeclaration` | no | `{ skillItems, omittedNotice, hasOmittedSkills, hasListedSkills = skillItems.length > 0, raw, readToolName, isGpt56, pathRoots = [] }` |
| [evaluation:430690-430697](../../../../../../reference/runtime/sand-eval-runner.cjs#L430690-L430697) | `FunctionDeclaration` | no | `{ skillItems, omittedNotice, hasOmittedSkills, hasListedSkills = skillItems.length > 0, raw, readToolName, isGpt56, pathRoots = [] }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640076-640083](../../../../../../reference/runtime/host-main.cjs#L640076-L640083) | 11 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430690-430697](../../../../../../reference/runtime/sand-eval-runner.cjs#L430690-L430697) | 11 | 0 | 0 | 2 | 0 | 0 |

### host:640076

Calls written directly in this body: `.join`, `jsx`, `jsxs`, `pathRoots.map`.

SHA-256 of the source span: `63aa0c4bdf6127bfdef92dbd94d8fa033e074a42e24db53f058e3e0e27278558`.

### evaluation:430690

Calls written directly in this body: `.join`, `jsx`, `jsxs`, `pathRoots.map`.

SHA-256 of the source span: `63aa0c4bdf6127bfdef92dbd94d8fa033e074a42e24db53f058e3e0e27278558`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
