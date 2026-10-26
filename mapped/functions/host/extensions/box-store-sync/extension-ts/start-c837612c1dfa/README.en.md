# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/extension.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506378-506422](../../../../../../../reference/runtime/host-main.cjs#L506378-L506422) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506378-506422](../../../../../../../reference/runtime/host-main.cjs#L506378-L506422) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:506378

Calls written directly in this body: `context2.onStop`, `createBoxStoreSyncService`, `createDebouncePolicy`, `createPollingPolicy2`, `createRetryPolicy`, `pinBoxStoreDiagnosticsReporter`, `service.start`.

SHA-256 of the source span: `684a8823e38585df6b938f01c0f60fab7734db1d8bf564273357b4c39fad2716`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
