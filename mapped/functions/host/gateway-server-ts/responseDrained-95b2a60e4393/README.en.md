# `responseDrained`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493686-493699](../../../../../reference/runtime/host-main.cjs#L493686-L493699) | `FunctionDeclaration` | no | `res` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493686-493699](../../../../../reference/runtime/host-main.cjs#L493686-L493699) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:493686

Calls written directly in this body: `Promise.resolve`, `new Promise`.

SHA-256 of the source span: `10dc19d6e2b35a49496eb910c343027c92eb34a13445fa74c177e1cf2487cede`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
