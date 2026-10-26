# `routedToolsReplacing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687146-687156](../../../../../../reference/runtime/host-main.cjs#L687146-L687156) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687146-687156](../../../../../../reference/runtime/host-main.cjs#L687146-L687156) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:687146

Calls written directly in this body: `carry.replaces.includes`, `carry.rows.includes`, `replacing.push`, `rowConnector`.

SHA-256 of the source span: `bcf8144dcf874ccb1168db6a9e758787fe0c870615b9890eadbd47b1f0e4aa40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
