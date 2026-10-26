# `applyWebAuthnProxyMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/webauthn-proxy-marker.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785308-785325](../../../../../../../reference/runtime/host-main.cjs#L785308-L785325) | `FunctionDeclaration` | no | `enabled, markerPath = SAND_WEBAUTHN_PROXY_MARKER_PATH, policyCommand = BOX_CHROME_POLICY_COMMAND2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785308-785325](../../../../../../../reference/runtime/host-main.cjs#L785308-L785325) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:785308

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `6f028450334efd2cfdab172f76c1271cb47866bedff3878668f3bad1759eeb9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
