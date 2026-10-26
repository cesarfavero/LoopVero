# `SandMcpManager.settleBoxForDisplay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689557-689588](../../../../../../../reference/runtime/host-main.cjs#L689557-L689588) | `method` | no | `visible` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689557-689588](../../../../../../../reference/runtime/host-main.cjs#L689557-L689588) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:689557

Calls written directly in this body: `.finally`, `.join`, `.map`, `.sort`, `.then`, `boxRuntime.isBoxExecWired`, `inFlight.isCurrent`, `stdioDisplayServers`, `this.listBoxForDisplay`, `this.listingCache.generationGuard`.

Assignment or increment targets: `this.boxDisplaySettle`, `this.queuedBoxDisplaySettle`.

SHA-256 of the source span: `19aa927752a5fb9fe35a01c54472e6d3496ca7fc2a03c6a6bcc484b748a05036`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
