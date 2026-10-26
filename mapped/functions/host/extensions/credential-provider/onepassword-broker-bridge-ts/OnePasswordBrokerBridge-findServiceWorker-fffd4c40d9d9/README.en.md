# `OnePasswordBrokerBridge.findServiceWorker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549625-549658](../../../../../../../reference/runtime/host-main.cjs#L549625-L549658) | `method` | yes | `cdpPort` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549625-549658](../../../../../../../reference/runtime/host-main.cjs#L549625-L549658) | 6 | 0 | 4 | 4 | 0 | 0 |

### host:549625

Calls written directly in this body: `errorLogTag`, `this.listServiceWorker`, `this.options.log`, `this.readExtensionId`, `this.wakePolling.start`, `this.wakeServiceWorker`.

SHA-256 of the source span: `2f4ebde568e90eae63a3da2688df78e6f5b704672a16311981607c34d1d3a9d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
