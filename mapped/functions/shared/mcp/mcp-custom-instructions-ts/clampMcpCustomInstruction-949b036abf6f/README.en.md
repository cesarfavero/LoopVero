# `clampMcpCustomInstruction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-custom-instructions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687238-687240](../../../../../../reference/runtime/host-main.cjs#L687238-L687240) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687238-687240](../../../../../../reference/runtime/host-main.cjs#L687238-L687240) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:687238

Calls written directly in this body: `raw.slice`.

SHA-256 of the source span: `3b19f80b7add659126bccb769f42780557d3ec4bc853dfe0e881e3ef896451ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
