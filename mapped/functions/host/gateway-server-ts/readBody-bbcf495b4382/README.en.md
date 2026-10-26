# `readBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493375-493387](../../../../../reference/runtime/host-main.cjs#L493375-L493387) | `FunctionDeclaration` | yes | `req` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493375-493387](../../../../../reference/runtime/host-main.cjs#L493375-L493387) | 2 | 1 | 0 | 1 | 1 | 0 |

### host:493375

Calls written directly in this body: `.toString`, `Buffer.concat`, `Buffer.from`, `chunks.push`, `new SandGatewayRequestError`.

Assignment or increment targets: `totalBytes`.

Explicit throw targets: `SandGatewayRequestError`.

SHA-256 of the source span: `f75e3375fbf6b7836720717d3274f5174e43a314ed31178134259cd950306f9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
