# `phoneLanding`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558212-558217](../../../../../../reference/runtime/host-main.cjs#L558212-L558217) | `FunctionDeclaration` | no | `row, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558212-558217](../../../../../../reference/runtime/host-main.cjs#L558212-L558217) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:558212

Calls written directly in this body: `phoneSurfaceFacts`, `sandPhoneScreenAt`, `visibilityHolds`.

SHA-256 of the source span: `cef982dbe9ab9e20abc20e13ac9babdd5a800a9cb2b7284bfa7c465627dffdce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
