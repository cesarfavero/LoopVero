# `createHttpProxyNameOverrideStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/http-proxy-name-override.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/http-proxy-name-override-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731750-731775](../../../../../../../reference/runtime/host-main.cjs#L731750-L731775) | `FunctionDeclaration` | no | `path33 = getHttpProxyNameOverridePath()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731750-731775](../../../../../../../reference/runtime/host-main.cjs#L731750-L731775) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:731750

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `341d2c7f4ef7560b98419d4395dd32949d305a45d0fa688237102d52d248cec8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
