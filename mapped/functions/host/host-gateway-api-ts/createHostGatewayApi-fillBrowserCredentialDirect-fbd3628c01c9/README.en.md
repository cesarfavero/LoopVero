# `createHostGatewayApi/fillBrowserCredentialDirect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493144-493148](../../../../../reference/runtime/host-main.cjs#L493144-L493148) | `ArrowFunctionExpression` | no | `{ approvalMode, ...args }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493144-493148](../../../../../reference/runtime/host-main.cjs#L493144-L493148) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:493144 uses an implicit arrow-function return.

### host:493144

Calls written directly in this body: `.fillBrowserCredential`, `deps.extensions.api`.

SHA-256 of the source span: `776495cd3505a26c53a364391c18bb923badce19dc94cb8f173606ef3dad2721`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
