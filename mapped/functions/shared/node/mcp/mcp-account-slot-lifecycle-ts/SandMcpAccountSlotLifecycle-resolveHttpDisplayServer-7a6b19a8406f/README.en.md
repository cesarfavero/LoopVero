# `SandMcpAccountSlotLifecycle.resolveHttpDisplayServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685246-685258](../../../../../../../reference/runtime/host-main.cjs#L685246-L685258) | `method` | yes | `rawServerId, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685246-685258](../../../../../../../reference/runtime/host-main.cjs#L685246-L685258) | 3 | 0 | 1 | 1 | 2 | 0 |

### host:685246

Calls written directly in this body: `new SandMcpConfigError`, `this.deps.resolveDisplayServer`, `validateMcpDisplayServerId`, `validateMcpServerId`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `e4f5e5335d6a2af5c85a0ac1d6ec9c861517526f27d3ec19c262c6d5947e7a07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
