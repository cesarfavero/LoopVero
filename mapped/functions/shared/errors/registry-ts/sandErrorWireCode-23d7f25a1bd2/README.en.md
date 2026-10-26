# `sandErrorWireCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/registry.ts` · [Module README](../../../../../modules/shared/errors/registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452609-452612](../../../../../../reference/runtime/host-main.cjs#L452609-L452612) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452609-452612](../../../../../../reference/runtime/host-main.cjs#L452609-L452612) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:452609

Calls written directly in this body: `isRegisteredCode`.

SHA-256 of the source span: `9e5075484827f1732bf360d9e8f59283aa11bda48a8575fb99c73ef5df2adc1f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
