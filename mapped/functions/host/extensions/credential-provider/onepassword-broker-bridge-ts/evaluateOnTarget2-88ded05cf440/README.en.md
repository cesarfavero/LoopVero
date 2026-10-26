# `evaluateOnTarget2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549435-549473](../../../../../../../reference/runtime/host-main.cjs#L549435-L549473) | `FunctionDeclaration` | yes | `webSocketDebuggerUrl, expression, timeoutMs, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549435-549473](../../../../../../../reference/runtime/host-main.cjs#L549435-L549473) | 4 | 0 | 1 | 1 | 3 | 0 |

### host:549435

Calls written directly in this body: `new BrokerCdpError`, `options2.log`, `workerContextPolling.start`.

Explicit throw targets: `BrokerCdpError`, `outcome.error`, `stop.cause`.

SHA-256 of the source span: `e527ba96d3cd711f7b4e51b58d978c98193c77f319cea273af9def4186012320`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
