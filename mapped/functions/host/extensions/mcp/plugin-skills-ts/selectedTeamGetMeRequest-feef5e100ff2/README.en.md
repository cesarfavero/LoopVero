# `selectedTeamGetMeRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701772-701774](../../../../../../../reference/runtime/host-main.cjs#L701772-L701774) | `FunctionDeclaration` | no | `teamId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701772-701774](../../../../../../../reference/runtime/host-main.cjs#L701772-L701774) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:701772

Calls written directly in this body: `new GetMeRequest`.

SHA-256 of the source span: `6a2bbfdf3c2d884980b3b01f485756ab12daa2fca92f7bd2fea40e24e79e2369`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
