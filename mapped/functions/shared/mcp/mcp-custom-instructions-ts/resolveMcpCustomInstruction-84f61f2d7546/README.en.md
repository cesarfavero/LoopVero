# `resolveMcpCustomInstruction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-custom-instructions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687258-687263](../../../../../../reference/runtime/host-main.cjs#L687258-L687263) | `FunctionDeclaration` | no | `serverName, storedInstruction` |
| [evaluation:529144-529149](../../../../../../reference/runtime/sand-eval-runner.cjs#L529144-L529149) | `FunctionDeclaration` | no | `serverName, storedInstruction` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687258-687263](../../../../../../reference/runtime/host-main.cjs#L687258-L687263) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:529144-529149](../../../../../../reference/runtime/sand-eval-runner.cjs#L529144-L529149) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:687258

Calls written directly in this body: `getDefaultMcpCustomInstruction`, `storedInstruction.trim`.

SHA-256 of the source span: `4a11ba743a31c54546b4160ce09a676e97a264d22c4f25a3323fdd55ec9f8576`.

### evaluation:529144

Calls written directly in this body: `getDefaultMcpCustomInstruction`, `storedInstruction.trim`.

SHA-256 of the source span: `4a11ba743a31c54546b4160ce09a676e97a264d22c4f25a3323fdd55ec9f8576`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
