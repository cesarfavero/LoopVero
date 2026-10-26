# `numberedCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558303-558311](../../../../../../reference/runtime/host-main.cjs#L558303-L558311) | `FunctionDeclaration` | no | `command` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558303-558311](../../../../../../reference/runtime/host-main.cjs#L558303-L558311) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:558303

Calls written directly in this body: `/^(.*\D)(\d+)$/.exec`.

SHA-256 of the source span: `0630aefd9e2a8af2175a48a560cd6b0e4b78a227b0879f7e5701eb56dae1eaee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
