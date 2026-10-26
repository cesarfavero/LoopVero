# `isRepoSkillDescriptor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-custom-mode.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-custom-mode-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509877-509879](../../../../../../reference/runtime/host-main.cjs#L509877-L509879) | `FunctionDeclaration` | no | `skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509877-509879](../../../../../../reference/runtime/host-main.cjs#L509877-L509879) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509877

Calls written directly in this body: `skill.sourcePath.trim`.

SHA-256 of the source span: `af949ba4e5eefed3dad7994d80612c6dbaa6ab84dba0703835ce72d819879fd3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
