# `McpHostService.constructor/subscribeToAuthCompletion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701573-701578](../../../../../../../reference/runtime/host-main.cjs#L701573-L701578) | `ArrowFunctionExpression` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701573-701578](../../../../../../../reference/runtime/host-main.cjs#L701573-L701578) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:701573

Calls written directly in this body: `this.authCompletionListeners.add`.

SHA-256 of the source span: `51fb610b7102e95ac3684cf30f12c25fff49adcecc6c672f3db6beaae40509c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
