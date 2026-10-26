# `SandMcpManager.requireAccountWriter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689722-689729](../../../../../../../reference/runtime/host-main.cjs#L689722-L689729) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689722-689729](../../../../../../../reference/runtime/host-main.cjs#L689722-L689729) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:689722

Calls written directly in this body: `new SandMcpConfigError`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `ffea2fe8a7dd563b356060db138467be7f442789dfbff23ef2e934e44ada13b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
