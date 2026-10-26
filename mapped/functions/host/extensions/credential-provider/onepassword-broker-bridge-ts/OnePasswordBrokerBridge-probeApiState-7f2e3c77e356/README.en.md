# `OnePasswordBrokerBridge.probeApiState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549889-549914](../../../../../../../reference/runtime/host-main.cjs#L549889-L549914) | `method` | yes | `cdpPort` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549889-549914](../../../../../../../reference/runtime/host-main.cjs#L549889-L549914) | 2 | 0 | 2 | 4 | 0 | 1 |

### host:549889

Calls written directly in this body: `apiStateOf`, `apiStatePrelude`, `decodeJson`, `errorLogTag`, `evaluateOnTarget2`, `this.findServiceWorker`, `this.noteApiState`, `this.options.log`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `dc0ad9c781739a89ac1d9fd009eb32b88042d7f9623b1c7aef46f788e7e21028`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
