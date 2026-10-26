# `SandMcpInstructionsAndToggles.migrateCustomInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688435-688447](../../../../../../../reference/runtime/host-main.cjs#L688435-L688447) | `method` | no | `servers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688435-688447](../../../../../../../reference/runtime/host-main.cjs#L688435-L688447) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:688435

Calls written directly in this body: `skipRefusedSettingsWrite`.

SHA-256 of the source span: `6fae681f271a8ec9fefff336492cb4992f44e6242ccead407bbb9e20cd5e2440`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
