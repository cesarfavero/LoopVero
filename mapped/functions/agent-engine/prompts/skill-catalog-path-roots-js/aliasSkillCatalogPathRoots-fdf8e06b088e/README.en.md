# `aliasSkillCatalogPathRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-path-roots.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639599-639654](../../../../../../reference/runtime/host-main.cjs#L639599-L639654) | `FunctionDeclaration` | no | `skills` |
| [evaluation:430213-430268](../../../../../../reference/runtime/sand-eval-runner.cjs#L430213-L430268) | `FunctionDeclaration` | no | `skills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639599-639654](../../../../../../reference/runtime/host-main.cjs#L639599-L639654) | 7 | 5 | 0 | 2 | 0 | 0 |
| [evaluation:430213-430268](../../../../../../reference/runtime/sand-eval-runner.cjs#L430213-L430268) | 7 | 5 | 0 | 2 | 0 | 0 |

### host:639599

Calls written directly in this body: `.reduce`, `.split`, `UNLISTABLE_PATH.test`, `assignRoots`, `createNode`, `members2.map`, `members2.push`, `membersByRoot.get`, `membersByRoot.set`, `membersByRoot.values`, `new Map`, `node2.children.get`, `node2.children.set`, `node2.skillIndexes.push`, `rootByIndex.get`, `roots.push`, `segments.slice`, `skill.fullPath.replace`, `skill.fullPath.slice`, `skills.entries`, `skills.keys`, `skills[computed].fullPath.slice`.

Assignment or increment targets: `aliasedSkills[computed]`, `child`, `node2`, `nodeByIndex[computed]`, `savedLength`.

SHA-256 of the source span: `b0e996bce96b7b2a3b8e6fc3ed902527338dbd5a9d8f563d757fc3d0376652fc`.

### evaluation:430213

Calls written directly in this body: `.reduce`, `.split`, `UNLISTABLE_PATH.test`, `assignRoots`, `createNode`, `members2.map`, `members2.push`, `membersByRoot.get`, `membersByRoot.set`, `membersByRoot.values`, `new Map`, `node2.children.get`, `node2.children.set`, `node2.skillIndexes.push`, `rootByIndex.get`, `roots.push`, `segments.slice`, `skill.fullPath.replace`, `skill.fullPath.slice`, `skills.entries`, `skills.keys`, `skills[computed].fullPath.slice`.

Assignment or increment targets: `aliasedSkills[computed]`, `child`, `node2`, `nodeByIndex[computed]`, `savedLength`.

SHA-256 of the source span: `b0e996bce96b7b2a3b8e6fc3ed902527338dbd5a9d8f563d757fc3d0376652fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
