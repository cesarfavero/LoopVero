# `OnePasswordBrokerBridge.restartServiceWorker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549664-549717](../../../../../../../reference/runtime/host-main.cjs#L549664-L549717) | `method` | yes | `cdpPort, workerUrl, afterStop` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549664-549717](../../../../../../../reference/runtime/host-main.cjs#L549664-L549717) | 5 | 0 | 4 | 4 | 0 | 1 |

### host:549664

Calls written directly in this body: `.pathname.replace`, `afterStop`, `createDeadlinePolicy`, `deadline.run`, `errorLogTag`, `new URL`, `this.options.log`, `this.readExtensionId`, `this.wakePolling.start`.

SHA-256 of the source span: `618c03de8c95b25382f4990e8ce4557491a3b6fd5fbb320e3726ae0774c1cf0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
