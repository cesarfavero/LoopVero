# `runGatewayCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489960-489966](../../../../../reference/runtime/host-main.cjs#L489960-L489966) | `FunctionDeclaration` | yes | `api, method, body, avatars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489960-489966](../../../../../reference/runtime/host-main.cjs#L489960-L489966) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:489960

Calls written directly in this body: `[computed]`, `handlersOf`, `isSlimShapedMethod`, `parseGatewayCommandBody`, `slimAvatarOverrides`.

SHA-256 of the source span: `bdfac77b5e53fcae3ea13411b2aa11eddfe7087a03acd99927a147c1f262e315`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
