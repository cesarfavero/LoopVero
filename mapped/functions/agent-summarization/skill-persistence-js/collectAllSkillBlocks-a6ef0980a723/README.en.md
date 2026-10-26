# `collectAllSkillBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/skills/README.en.md).

**Module:** `agent-summarization/skill-persistence.js` · [Module README](../../../../modules/agent-summarization/skill-persistence-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620610-620617](../../../../../reference/runtime/host-main.cjs#L620610-L620617) | `FunctionDeclaration` | no | `messages2` |
| [evaluation:304964-304971](../../../../../reference/runtime/sand-eval-runner.cjs#L304964-L304971) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620610-620617](../../../../../reference/runtime/host-main.cjs#L620610-L620617) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304964-304971](../../../../../reference/runtime/sand-eval-runner.cjs#L304964-L304971) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:620610

Calls written directly in this body: `extractManuallyAttachedSkillBlocks`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `cedbd3d8cb8044bdea07eced6d4a93b4ff15b71b3140e391b5ee618cd99a985a`.

### evaluation:304964

Calls written directly in this body: `extractManuallyAttachedSkillBlocks`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `34d5effa2198302b8659bf62dc8440648bc8a8fe30001be1a8a8de818672aec9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
