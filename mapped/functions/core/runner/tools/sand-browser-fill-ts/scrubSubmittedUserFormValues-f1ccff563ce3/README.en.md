# `scrubSubmittedUserFormValues`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727410-727422](../../../../../../../reference/runtime/host-main.cjs#L727410-L727422) | `FunctionDeclaration` | no | `text3, values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727410-727422](../../../../../../../reference/runtime/host-main.cjs#L727410-L727422) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:727410

Calls written directly in this body: `.filter`, `.sort`, `needle.replace`, `new RegExp`, `new Set`, `scrubbed.replace`, `values.map`.

Assignment or increment targets: `scrubbed`.

SHA-256 of the source span: `d2069da673df57d433b4b978a1e1104a6986ae7c294c4c01b1df94618aba2a6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
