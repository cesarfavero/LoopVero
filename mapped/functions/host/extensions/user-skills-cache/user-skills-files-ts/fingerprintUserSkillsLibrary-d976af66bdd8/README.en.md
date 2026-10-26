# `fingerprintUserSkillsLibrary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/user-skills-cache/user-skills-files.ts` · [Module README](../../../../../../modules/host/extensions/user-skills-cache/user-skills-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784829-784832](../../../../../../../reference/runtime/host-main.cjs#L784829-L784832) | `FunctionDeclaration` | yes | `libraryDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784829-784832](../../../../../../../reference/runtime/host-main.cjs#L784829-L784832) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:784829

Calls written directly in this body: `libraryFs.readTree`, `userSkillsFingerprintOfTree`.

SHA-256 of the source span: `7aea83cc2baa1a64b143ae507b65c20deda57fd2eb192e0a4bfe78531b30e22b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
