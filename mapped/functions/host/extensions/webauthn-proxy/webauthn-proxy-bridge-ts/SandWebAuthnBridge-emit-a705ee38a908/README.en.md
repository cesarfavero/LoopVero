# `SandWebAuthnBridge.emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785268-785276](../../../../../../../reference/runtime/host-main.cjs#L785268-L785276) | `method` | no | `funnel, report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785268-785276](../../../../../../../reference/runtime/host-main.cjs#L785268-L785276) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:785268

Calls written directly in this body: `this.deps.clock.monotonicNow`, `this.deps.report.ceremony`.

SHA-256 of the source span: `6b0688295e91faed70e664d45c890607094ab36b3fec74f3cdd6d83cac7b9bf3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
