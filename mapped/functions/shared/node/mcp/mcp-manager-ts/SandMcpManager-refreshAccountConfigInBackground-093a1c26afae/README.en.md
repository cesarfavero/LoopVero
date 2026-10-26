# `SandMcpManager.refreshAccountConfigInBackground`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690061-690064](../../../../../../../reference/runtime/host-main.cjs#L690061-L690064) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690061-690064](../../../../../../../reference/runtime/host-main.cjs#L690061-L690064) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:690061

Calls written directly in this body: `this.definitionSource.refreshInBackground`, `this.invalidateAccountServersPromise`.

SHA-256 of the source span: `21f7b2fd3c4b115596c35a5bda1a5886d4560768454beb0e5c3487c191f3b94c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
