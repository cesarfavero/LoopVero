# `SandWebAuthnBridge.settle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785248-785267](../../../../../../../reference/runtime/host-main.cjs#L785248-L785267) | `method` | no | `requestId2, settlement` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785248-785267](../../../../../../../reference/runtime/host-main.cjs#L785248-L785267) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:785248

Calls written directly in this body: `pending.settle`, `stageCause`, `this.emit`, `this.pending.delete`, `this.pending.get`.

SHA-256 of the source span: `3f844032a792d507baaf9779d260168e637504829c5cd137c3e5c07af9f7eb17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
