# `OnePasswordBrokerBridge.evaluateCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550036-550138](../../../../../../../reference/runtime/host-main.cjs#L550036-L550138) | `method` | yes | `workerUrl, cdpPort, method, params, resultSchema, timeoutMs, agenticModeParams` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550036-550138](../../../../../../../reference/runtime/host-main.cjs#L550036-L550138) | 13 | 0 | 1 | 5 | 0 | 1 |

### host:550036

Calls written directly in this body: `.filter`, `.loose`, `.optional`, `.safeParse`, `JSON.stringify`, `apiStateOf`, `apiStatePrelude`, `decodeJson`, `errorCodeSchema.safeParse`, `errorLogTag`, `evaluateOnTarget2`, `failureEnvelopeSchema.safeParse`, `literal`, `loggableExtensionText`, `namespaces.join`, `object`, `resultSchema.safeParse`, `this.options.log`, `unknown`, `withApi`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `da880368c3888c22e88fe1885da25c29663dee8d7ac48e12d1613afcc4afcfdc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
