# `validateMcpDisplayServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-server-id.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685172-685181](../../../../../../../reference/runtime/host-main.cjs#L685172-L685181) | `FunctionDeclaration` | no | `rawId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685172-685181](../../../../../../../reference/runtime/host-main.cjs#L685172-L685181) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:685172

Calls written directly in this body: `isGrokDisplayServerId`, `isMcpListingServerId`, `new SandMcpConfigError`, `rawId.trim`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `66bd613b1df08c44dc4f6dc30af534e7471bcdd2abd4c278e4104dc2795d7dd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
