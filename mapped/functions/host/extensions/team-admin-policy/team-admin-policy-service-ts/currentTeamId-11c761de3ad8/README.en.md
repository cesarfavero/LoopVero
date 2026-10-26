# `currentTeamId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/team-admin-policy/team-admin-policy-service.ts` · [Module README](../../../../../../modules/host/extensions/team-admin-policy/team-admin-policy-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729779-729781](../../../../../../../reference/runtime/host-main.cjs#L729779-L729781) | `FunctionDeclaration` | no | `getTeamId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729779-729781](../../../../../../../reference/runtime/host-main.cjs#L729779-L729781) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729779

Calls written directly in this body: `getTeamId`.

SHA-256 of the source span: `4c3224d8f68c5a68034e285b47f5b5acc7f6f3fce467989a14c0c12b86b7bb79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
