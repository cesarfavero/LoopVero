# `HostBox.agentMcpHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/host-box.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680597-680599](../../../../../../../reference/runtime/host-main.cjs#L680597-L680599) | `method` | yes | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680597-680599](../../../../../../../reference/runtime/host-main.cjs#L680597-L680599) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:680597

Calls written directly in this body: `boxAgentMcpHost`.

SHA-256 of the source span: `9d0d1915a75344efc3a0be9c2a32a8e9467a6c575233c294c4b733757bd9884e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
