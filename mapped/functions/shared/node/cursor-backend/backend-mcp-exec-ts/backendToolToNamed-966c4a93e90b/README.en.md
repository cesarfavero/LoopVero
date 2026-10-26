# `backendToolToNamed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486929-486942](../../../../../../../reference/runtime/host-main.cjs#L486929-L486942) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486929-486942](../../../../../../../reference/runtime/host-main.cjs#L486929-L486942) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:486929

Calls written directly in this body: `isUnknownRecord2`, `parseJsonOrUndefined`, `parseMcpToolAnnotations`, `parsedInputSchemaJson`, `tool.inputSchema.toJson`.

SHA-256 of the source span: `f8c5bc9fe49e36e2ddc321e3d4afe0ed8903e5332777a8700a6d4dcd0060f02a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
