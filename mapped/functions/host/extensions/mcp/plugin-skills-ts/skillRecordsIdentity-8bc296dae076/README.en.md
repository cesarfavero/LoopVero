# `skillRecordsIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701677-701679](../../../../../../../reference/runtime/host-main.cjs#L701677-L701679) | `FunctionDeclaration` | no | `records2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701677-701679](../../../../../../../reference/runtime/host-main.cjs#L701677-L701679) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:701677

Calls written directly in this body: `.join`, `.sort`, `records2.map`.

SHA-256 of the source span: `8f4561023206d206296a3d719993b398a48950a4e8edc981d357f96a0e8565d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
