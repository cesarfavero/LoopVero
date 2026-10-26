# `formatMcpCustomInstructionToolNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-custom-instructions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687264-687267](../../../../../../reference/runtime/host-main.cjs#L687264-L687267) | `FunctionDeclaration` | no | `serverName, instructions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687264-687267](../../../../../../reference/runtime/host-main.cjs#L687264-L687267) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:687264

Calls written directly in this body: `instructions.trim`.

SHA-256 of the source span: `91464772a75bd1414ba7bee91374b01ba352acf25641da02ba0e1c24ec055de2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
