# `sandErrorTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/registry.ts` · [Module README](../../../../../modules/shared/errors/registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452619-452642](../../../../../../reference/runtime/host-main.cjs#L452619-L452642) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452619-452642](../../../../../../reference/runtime/host-main.cjs#L452619-L452642) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:452619

Calls written directly in this body: `BOUNDED_TAG_VALUE.test`, `Number.isFinite`, `Object.entries`, `String`, `declared.has`, `new Set`, `put`, `sandErrorWireCode`, `tagName`.

SHA-256 of the source span: `74eb842fe33d67ea4b9497c5631716f9de35eaa6f4aa2f4deded04649b4c20bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
