# `isMcpAppMimeType`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486766-486770](../../../../../../reference/runtime/host-main.cjs#L486766-L486770) | `FunctionDeclaration` | no | `mimeType` |
| [evaluation:495076-495080](../../../../../../reference/runtime/sand-eval-runner.cjs#L495076-L495080) | `FunctionDeclaration` | no | `mimeType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486766-486770](../../../../../../reference/runtime/host-main.cjs#L486766-L486770) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495076-495080](../../../../../../reference/runtime/sand-eval-runner.cjs#L495076-L495080) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:486766

Calls written directly in this body: `mimeType.toLowerCase`, `normalized.includes`, `normalized.startsWith`.

SHA-256 of the source span: `6337d5a6ac0b83fece07fc9377547cac2dda5595f6106010640e6134486a7f3c`.

### evaluation:495076

Calls written directly in this body: `mimeType.toLowerCase`, `normalized.includes`, `normalized.startsWith`.

SHA-256 of the source span: `6337d5a6ac0b83fece07fc9377547cac2dda5595f6106010640e6134486a7f3c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
