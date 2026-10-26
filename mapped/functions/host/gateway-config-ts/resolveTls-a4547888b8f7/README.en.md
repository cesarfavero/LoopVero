# `resolveTls`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-config.ts` · [Module README](../../../../modules/host/gateway-config-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483858-483877](../../../../../reference/runtime/host-main.cjs#L483858-L483877) | `FunctionDeclaration` | no | `env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483858-483877](../../../../../reference/runtime/host-main.cjs#L483858-L483877) | 2 | 0 | 0 | 2 | 2 | 1 |

### host:483858

Calls written directly in this body: `String`, `env.SAND_GATEWAY_TLS_CERT.trim`, `env.SAND_GATEWAY_TLS_KEY.trim`, `new SandGatewayConfigError`.

Explicit throw targets: `SandGatewayConfigError`.

SHA-256 of the source span: `63912f138b7adff6aa2208d9b648e6115f62d52a5745321abcb04f365e601ef8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
