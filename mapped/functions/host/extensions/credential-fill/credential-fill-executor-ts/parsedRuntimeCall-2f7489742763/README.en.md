# `parsedRuntimeCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-executor.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:544276-544280](../../../../../../../reference/runtime/host-main.cjs#L544276-L544280) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:544276-544280](../../../../../../../reference/runtime/host-main.cjs#L544276-L544280) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:544276

Calls written directly in this body: `runtimeCallResultSchema.safeParse`.

SHA-256 of the source span: `863c6b30a9bf95933d4a96e8fdbe0b24b9c0e1aa10e28aa896c6772de3ac936b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
