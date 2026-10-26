# `maxLocalExecUploadFrameBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/gateway/README.en.md).

**Module:** `shared/local-exec/local-exec-gateway.ts` · [Module README](../../../../../modules/shared/local-exec/local-exec-gateway-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486576-486578](../../../../../../reference/runtime/host-main.cjs#L486576-L486578) | `FunctionDeclaration` | no | `maxFileBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486576-486578](../../../../../../reference/runtime/host-main.cjs#L486576-L486578) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:486576

Calls written directly in this body: `Math.ceil`.

SHA-256 of the source span: `6fb3322dc96b4d74dfc875a096f4b99ef61fefeb52be16ca31c929122464243c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
