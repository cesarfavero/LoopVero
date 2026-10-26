# `OnePasswordBrokerBridge.createAccessRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550139-550160](../../../../../../../reference/runtime/host-main.cjs#L550139-L550160) | `method` | no | `cdpPort, session, request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550139-550160](../../../../../../../reference/runtime/host-main.cjs#L550139-L550160) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:550139

Calls written directly in this body: `request5.entries.map`, `this.call`.

SHA-256 of the source span: `4700c0518d7cb7b05b4012eb2c397d1fbdf3c8babc237eeb8ee2ded304d22a0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
