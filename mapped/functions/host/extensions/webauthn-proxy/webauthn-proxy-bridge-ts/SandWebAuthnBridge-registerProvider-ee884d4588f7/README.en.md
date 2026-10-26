# `SandWebAuthnBridge.registerProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785091-785133](../../../../../../../reference/runtime/host-main.cjs#L785091-L785133) | `method` | no | `send` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785091-785133](../../../../../../../reference/runtime/host-main.cjs#L785091-L785133) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:785091

Calls written directly in this body: `send`, `this.deps.clock.now`, `this.deps.report.provider`, `this.providers.add`, `this.providersById.set`.

SHA-256 of the source span: `9423ea565b04c24c0f975c4a66ae482752055484e8c2e8f67c635390efdd7def`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
