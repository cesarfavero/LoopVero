# `userSkillsFingerprintOfTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/brain-docs/user-skills-fingerprint.ts` · [Module README](../../../../../modules/core/brain-docs/user-skills-fingerprint-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784808-784821](../../../../../../reference/runtime/host-main.cjs#L784808-L784821) | `FunctionDeclaration` | no | `tree, libraryRoot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784808-784821](../../../../../../reference/runtime/host-main.cjs#L784808-L784821) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:784808

Calls written directly in this body: `JSON.stringify`, `counted2.push`, `counted2.sort`, `hash2.digest`, `hash2.update`, `import_node_path174.posix.relative`, `isUnderRoot`, `isUserSkillsFingerprintPath`.

SHA-256 of the source span: `1bc5dac8bad66aa5627ee7424e766b0023837cfea83c7eefce1463c2380bb30e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
