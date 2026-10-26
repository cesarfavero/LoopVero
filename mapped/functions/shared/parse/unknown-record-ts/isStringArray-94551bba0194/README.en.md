# `isStringArray`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/parse/unknown-record.ts` · [Module README](../../../../../modules/shared/parse/unknown-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:155292-155294](../../../../../../reference/runtime/host-main.cjs#L155292-L155294) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155292-155294](../../../../../../reference/runtime/host-main.cjs#L155292-L155294) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:155292

Calls written directly in this body: `Array.isArray`, `value.every`.

SHA-256 of the source span: `b9e9cc7ac0caae003241b9cbab7f6ecd2b7ce91c5a347b00e43166c85419dcbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
