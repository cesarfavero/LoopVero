# `managedSkillIdFromPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/managed-skills.ts` · [Module README](../../../../../modules/core/skills/managed-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534353-534364](../../../../../../reference/runtime/sand-eval-runner.cjs#L534353-L534364) | `FunctionDeclaration` | no | `path33, roots = BOX_MANAGED_SKILL_ROOTS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534353-534364](../../../../../../reference/runtime/sand-eval-runner.cjs#L534353-L534364) | 3 | 1 | 0 | 3 | 0 | 0 |

### evaluation:534353

Calls written directly in this body: `.split`, `import_node_path28.posix.isAbsolute`, `import_node_path28.posix.normalize`, `isSafeFolderId`, `normalized.slice`, `normalized.startsWith`.

SHA-256 of the source span: `e984a8021ae0d432df9d7f684fb9c4581a025d657e8cf6329313940be1d73310`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
