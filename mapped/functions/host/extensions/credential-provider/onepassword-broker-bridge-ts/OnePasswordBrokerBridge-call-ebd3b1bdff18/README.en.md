# `OnePasswordBrokerBridge.call`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549996-550035](../../../../../../../reference/runtime/host-main.cjs#L549996-L550035) | `method` | yes | `cdpPort, method, params, resultSchema, timeoutMs, agenticModeParams` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549996-550035](../../../../../../../reference/runtime/host-main.cjs#L549996-L550035) | 9 | 0 | 5 | 8 | 0 | 0 |

### host:549996

Calls written directly in this body: `call`, `flagWatch.current.close`, `flagWatch.current.settle`, `missing`, `this.findServiceWorker`, `this.noteApiState`, `this.options.log`, `this.restartServiceWorker`, `this.restartedPorts.add`, `this.restartedPorts.has`, `unavailable`.

SHA-256 of the source span: `6d94c38fce4ebacff804fea1c8c83ba68cbabcfd3ca09999d9b4dfe040e528eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
