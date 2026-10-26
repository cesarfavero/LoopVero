# `cloudAgentCustomModeCandidates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-custom-mode.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-custom-mode-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509880-509898](../../../../../../reference/runtime/host-main.cjs#L509880-L509898) | `FunctionDeclaration` | no | `response` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509880-509898](../../../../../../reference/runtime/host-main.cjs#L509880-L509898) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:509880

Calls written directly in this body: `candidates.push`, `isRepoSkillDescriptor`, `new Set`, `nonRepo.add`, `nonRepo.has`, `normalizeCustomModeName`, `rawName.trim`, `seen.add`, `seen.has`.

SHA-256 of the source span: `faf98a086324e8d9a1ac6d3a8cd666a523140c4d67c10222cb8cb9f4581722e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
