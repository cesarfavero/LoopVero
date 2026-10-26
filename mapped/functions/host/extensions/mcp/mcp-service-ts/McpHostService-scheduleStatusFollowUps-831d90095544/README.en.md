# `McpHostService.scheduleStatusFollowUps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701622-701656](../../../../../../../reference/runtime/host-main.cjs#L701622-L701656) | `method` | no | `servers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701622-701656](../../../../../../../reference/runtime/host-main.cjs#L701622-L701656) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:701622

Calls written directly in this body: `this.statusFollowUps.has`, `this.statusFollowUps.set`.

SHA-256 of the source span: `617b02853d27cd4a6b93d98c6683d0aa80220a46ee4eb5600f8d0f93d5e6b173`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
