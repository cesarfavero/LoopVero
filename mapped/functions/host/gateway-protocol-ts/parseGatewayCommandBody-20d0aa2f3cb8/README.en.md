# `parseGatewayCommandBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489941-489956](../../../../../reference/runtime/host-main.cjs#L489941-L489956) | `FunctionDeclaration` | yes | `method, body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489941-489956](../../../../../reference/runtime/host-main.cjs#L489941-L489956) | 2 | 0 | 1 | 1 | 2 | 1 |

### host:489941

Calls written directly in this body: `JSON.parse`, `String`, `describeIssues`, `new SandGatewayRequestError`, `schema3[computed].validate`.

Assignment or increment targets: `parsed2`.

Explicit throw targets: `SandGatewayRequestError`.

SHA-256 of the source span: `5b9044b723898f18c878bfb5838eb16c8cb5f93c59aa8a25b4977880a0ad2566`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
