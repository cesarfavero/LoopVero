# `McpHostService.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701601-701608](../../../../../../../reference/runtime/host-main.cjs#L701601-L701608) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701601-701608](../../../../../../../reference/runtime/host-main.cjs#L701601-L701608) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:701601

Calls written directly in this body: `this.authCompletionListeners.clear`, `this.hostMcp.dispose`, `this.serversUpdatedListeners.clear`, `this.statusFollowUps.clear`.

Assignment or increment targets: `this.disposed`.

SHA-256 of the source span: `9317876377c6184006eb17eadfd1f7bf7fde135e73654844b717fe981a0702b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
