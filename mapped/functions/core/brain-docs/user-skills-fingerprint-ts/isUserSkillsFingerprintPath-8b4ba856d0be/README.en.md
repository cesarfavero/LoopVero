# `isUserSkillsFingerprintPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/brain-docs/user-skills-fingerprint.ts` · [Module README](../../../../../modules/core/brain-docs/user-skills-fingerprint-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784797-784801](../../../../../../reference/runtime/host-main.cjs#L784797-L784801) | `FunctionDeclaration` | no | `posixPathUnderLibraryRoot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784797-784801](../../../../../../reference/runtime/host-main.cjs#L784797-L784801) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:784797

Calls written directly in this body: `isSafeFolderId`, `posixPathUnderLibraryRoot.split`, `rest.every`.

SHA-256 of the source span: `2b99bb71ca3e4f07e7c36c323e810f2fac060a7bf314b549546d5af152d37097`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
