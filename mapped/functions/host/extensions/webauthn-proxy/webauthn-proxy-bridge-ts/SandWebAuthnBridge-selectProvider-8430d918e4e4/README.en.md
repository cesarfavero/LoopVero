# `SandWebAuthnBridge.selectProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785287-785299](../../../../../../../reference/runtime/host-main.cjs#L785287-L785299) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785287-785299](../../../../../../../reference/runtime/host-main.cjs#L785287-L785299) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:785287

Calls written directly in this body: `isLive2`, `this.deps.clock.now`.

Assignment or increment targets: `best`.

SHA-256 of the source span: `9e2a3ef0fc482540fd458c149966140e261b9f3893a50bbea309c68d95d27f41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
