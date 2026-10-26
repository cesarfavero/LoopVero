# `commandTrace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493523-493529](../../../../../reference/runtime/host-main.cjs#L493523-L493529) | `FunctionDeclaration` | no | `req` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493523-493529](../../../../../reference/runtime/host-main.cjs#L493523-L493529) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:493523

Calls written directly in this body: `Array.isArray`, `parseTraceparent`.

SHA-256 of the source span: `75b270e97937f633e3c7a83b0ab30ae670eb19c68e3a39b269d4a38d492669ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
