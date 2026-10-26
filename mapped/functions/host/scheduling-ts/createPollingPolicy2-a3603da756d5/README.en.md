# `createPollingPolicy2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/scheduling.ts` · [Module README](../../../../modules/host/scheduling-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454141-454143](../../../../../reference/runtime/host-main.cjs#L454141-L454143) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454141-454143](../../../../../reference/runtime/host-main.cjs#L454141-L454143) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454141

Calls written directly in this body: `createPollingPolicy`.

SHA-256 of the source span: `72c6374ffd211eb8b0f286c0b145539d3a47f1c21a76f4864f27bd2cae7a3c98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
