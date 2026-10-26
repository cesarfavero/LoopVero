# `SandWebAuthnBridge.submitResponses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785134-785192](../../../../../../../reference/runtime/host-main.cjs#L785134-L785192) | `method` | no | `batch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785134-785192](../../../../../../../reference/runtime/host-main.cjs#L785134-L785192) | 12 | 1 | 0 | 0 | 0 | 0 |

### host:785134

Calls written directly in this body: `parseDesktopStage`, `stageCause`, `this.deps.clock.now`, `this.deps.report.provider`, `this.emit`, `this.pending.get`, `this.providersById.get`, `this.settle`.

Assignment or increment targets: `pending.lastStage`, `provider.computerId`, `provider.hadHello`, `provider.hasHeartbeat`, `provider.label`, `provider.lastSeenAt`.

SHA-256 of the source span: `10d023d16af480a5d8d27c04aa6979b6ad1edd873a76c3cdd12c7b96c9315ad3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
