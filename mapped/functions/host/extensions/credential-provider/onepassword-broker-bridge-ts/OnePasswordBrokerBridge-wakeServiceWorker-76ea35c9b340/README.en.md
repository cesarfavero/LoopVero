# `OnePasswordBrokerBridge.wakeServiceWorker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549916-549959](../../../../../../../reference/runtime/host-main.cjs#L549916-L549959) | `method` | yes | `cdpPort, installedId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549916-549959](../../../../../../../reference/runtime/host-main.cjs#L549916-L549959) | 2 | 0 | 2 | 4 | 0 | 2 |

### host:549916

Calls written directly in this body: `.find`, `.safeParse`, `array`, `createDeadlinePolicy`, `deadline.run`, `errorLogTag`, `listedDebuggerUrl`, `parsed2.data.map`, `runCdpCommands`, `this.options.log`, `unknown`.

Assignment or increment targets: `pageUrl`.

SHA-256 of the source span: `e00b5fef6e394ba72a1716a4f75705d0543d43b80a0673a569351f6d0ab361a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
