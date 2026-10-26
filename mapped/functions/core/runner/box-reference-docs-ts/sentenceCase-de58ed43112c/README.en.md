# `sentenceCase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558179-558182](../../../../../../reference/runtime/host-main.cjs#L558179-L558182) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558179-558182](../../../../../../reference/runtime/host-main.cjs#L558179-L558182) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:558179

Calls written directly in this body: `/[A-Z]/.test`, `first.toUpperCase`, `text3.charAt`, `text3.slice`, `text3.split`.

SHA-256 of the source span: `18d550f5faa6414c0659b92c1e3b1aef17797bb344a5fa08a2a972821d4d851c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
