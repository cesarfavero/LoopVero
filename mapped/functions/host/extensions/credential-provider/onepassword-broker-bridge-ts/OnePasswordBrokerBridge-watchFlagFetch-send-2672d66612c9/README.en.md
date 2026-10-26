# `OnePasswordBrokerBridge.watchFlagFetch/send`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549759-549765](../../../../../../../reference/runtime/host-main.cjs#L549759-L549765) | `ArrowFunctionExpression` | no | `method, params, sessionId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549759-549765](../../../../../../../reference/runtime/host-main.cjs#L549759-L549765) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:549759

Calls written directly in this body: `JSON.stringify`, `socket.send`.

Assignment or increment targets: `nextId`.

SHA-256 of the source span: `dfe54b6b4e8464058c47e2b374704ca29cae0cb6869fd29247cb881b757bb8ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
