# `jsx`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/jsx-runtime.js` · [Module README](../../../../modules/prompt-jsx/jsx-runtime-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:628938-628950](../../../../../reference/runtime/host-main.cjs#L628938-L628950) | `FunctionDeclaration` | no | `type2, props, ...children` |
| [evaluation:317955-317967](../../../../../reference/runtime/sand-eval-runner.cjs#L317955-L317967) | `FunctionDeclaration` | no | `type2, props, ...children` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:628938-628950](../../../../../reference/runtime/host-main.cjs#L628938-L628950) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:317955-317967](../../../../../reference/runtime/sand-eval-runner.cjs#L317955-L317967) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:628938

Calls written directly in this body: `Array.isArray`, `allChildren.filter`.

SHA-256 of the source span: `3941683b231e33ac1c3dc8f992ebbe6312d89fcec689d0beb2fa67a2fcf45c7e`.

### evaluation:317955

Calls written directly in this body: `Array.isArray`, `allChildren.filter`.

SHA-256 of the source span: `3941683b231e33ac1c3dc8f992ebbe6312d89fcec689d0beb2fa67a2fcf45c7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
