# `hasPlainPrototype`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/json-value-equality.ts` · [Module README](../../../../modules/shared/json-value-equality-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552003-552006](../../../../../reference/runtime/host-main.cjs#L552003-L552006) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552003-552006](../../../../../reference/runtime/host-main.cjs#L552003-L552006) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:552003

Calls written directly in this body: `Object.getPrototypeOf`.

SHA-256 of the source span: `30c9b445b4c55bd585a34ccb5fbe709acd3695ebb36bef6be2c5b049dad5b57c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
