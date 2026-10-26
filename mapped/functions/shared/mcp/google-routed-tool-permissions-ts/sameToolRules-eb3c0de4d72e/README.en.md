# `sameToolRules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687187-687192](../../../../../../reference/runtime/host-main.cjs#L687187-L687192) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687187-687192](../../../../../../reference/runtime/host-main.cjs#L687187-L687192) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:687187

Calls written directly in this body: `Object.entries`, `Object.keys`, `leftEntries.every`.

SHA-256 of the source span: `3bd9512ccdd1aaecc8755f07c9c1730e25596d3bc84edca1cf484fe4eba96f36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
