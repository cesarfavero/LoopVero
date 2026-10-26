# `createOrbitService`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706210-706378](../../../../../../../reference/runtime/host-main.cjs#L706210-L706378) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706210-706378](../../../../../../../reference/runtime/host-main.cjs#L706210-L706378) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706210

Calls written directly in this body: `new AbortController`.

SHA-256 of the source span: `793957cf618db42c70e1d4ea82cc05fbda66e91dfc743e42edca97cb651381ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
