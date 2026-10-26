# `CredentialFillExecutor.listTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-executor.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:544646-544676](../../../../../../../reference/runtime/host-main.cjs#L544646-L544676) | `method` | yes | `browserCdpPort, targetId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:544646-544676](../../../../../../../reference/runtime/host-main.cjs#L544646-L544676) | 5 | 0 | 1 | 6 | 0 | 1 |

### host:544646

Calls written directly in this body: `TARGET_LOOKUP_DEADLINE.run`, `connectionRefusedSchema.safeParse`, `errorLogTag`, `targetListSchema.parse`, `targets.find`, `this.options.reportFailure`, `trustedTargetWebSocket`.

SHA-256 of the source span: `8c6944d11d45160f7d99608a0fac0fbc1d2cfc06f42e19ad41cff45f01078299`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
