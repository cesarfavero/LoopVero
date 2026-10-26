# `handleLocalExecResponses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493766-493774](../../../../../reference/runtime/host-main.cjs#L493766-L493774) | `FunctionDeclaration` | no | `deps, body, res` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493766-493774](../../../../../reference/runtime/host-main.cjs#L493766-L493774) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:493766

Calls written directly in this body: `bridge.submitResponses`, `parseArgs`, `respondError`, `respondJson`.

SHA-256 of the source span: `d44137a3b00db4134c131d75be1e737df954c9f2439ff57dc4d7e907c5bea6c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
