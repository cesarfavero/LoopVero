# `fetchSandManagedSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/managed-setup/cursor-skills-marketplace.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/cursor-skills-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683347-683363](../../../../../../../reference/runtime/host-main.cjs#L683347-L683363) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683347-683363](../../../../../../../reference/runtime/host-main.cjs#L683347-L683363) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:683347

Calls written directly in this body: `client.getManagedSkills`, `createDashboardClient`, `new GetManagedSkillsRequest`, `response.skills.map`.

SHA-256 of the source span: `d7367de900a45cab62a96310588d1d477fbb55e3faa3e61ee139dcbbd94ecaaa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
