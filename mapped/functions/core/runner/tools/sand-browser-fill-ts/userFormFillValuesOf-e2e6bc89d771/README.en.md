# `userFormFillValuesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727160-727180](../../../../../../../reference/runtime/host-main.cjs#L727160-L727180) | `FunctionDeclaration` | no | `form, values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727160-727180](../../../../../../../reference/runtime/host-main.cjs#L727160-L727180) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:727160

Calls written directly in this body: `form.fields.flatMap`.

SHA-256 of the source span: `372c76bca5209adf8c9a8ca887f0610ae3a7c4ead5c95cdc7e6f7ff3b4303aa2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
