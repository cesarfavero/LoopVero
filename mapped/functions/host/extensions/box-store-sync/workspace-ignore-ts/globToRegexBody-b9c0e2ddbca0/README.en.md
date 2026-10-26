# `globToRegexBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/workspace-ignore.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482339-482381](../../../../../../../reference/runtime/host-main.cjs#L482339-L482381) | `FunctionDeclaration` | no | `glob` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482339-482381](../../../../../../../reference/runtime/host-main.cjs#L482339-L482381) | 7 | 2 | 0 | 1 | 0 | 0 |

### host:482339

Calls written directly in this body: `escapeRegexChar`, `readCharClass`.

Assignment or increment targets: `i`, `j2`, `re3`.

SHA-256 of the source span: `f6ae65b51395719dc33bcc86c7cd2bac82fe4d0ddf91e8d0b6a7b0495eb5d66d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
