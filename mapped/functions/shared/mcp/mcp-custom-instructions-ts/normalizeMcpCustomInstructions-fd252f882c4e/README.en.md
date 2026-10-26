# `normalizeMcpCustomInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-custom-instructions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687268-687279](../../../../../../reference/runtime/host-main.cjs#L687268-L687279) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687268-687279](../../../../../../reference/runtime/host-main.cjs#L687268-L687279) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:687268

Calls written directly in this body: `Object.entries`, `clampMcpCustomInstruction`, `clamped.trim`, `getDefaultMcpCustomInstruction`.

Assignment or increment targets: `normalized[computed]`.

SHA-256 of the source span: `c4e40cb73b9017ff9041f8dc23ece206b2f1c702b1f4228235d3def53754d76a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
