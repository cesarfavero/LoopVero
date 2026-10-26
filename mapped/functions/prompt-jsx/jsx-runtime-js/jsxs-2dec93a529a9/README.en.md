# `jsxs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/jsx-runtime.js` · [Module README](../../../../modules/prompt-jsx/jsx-runtime-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:628954-628956](../../../../../reference/runtime/host-main.cjs#L628954-L628956) | `FunctionDeclaration` | no | `type2, props` |
| [evaluation:317971-317973](../../../../../reference/runtime/sand-eval-runner.cjs#L317971-L317973) | `FunctionDeclaration` | no | `type2, props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:628954-628956](../../../../../reference/runtime/host-main.cjs#L628954-L628956) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:317971-317973](../../../../../reference/runtime/sand-eval-runner.cjs#L317971-L317973) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:628954

Calls written directly in this body: `jsx`.

SHA-256 of the source span: `aa0e691978eeb87b50240a576a91672a725147422e95428819a92c82e82571ac`.

### evaluation:317971

Calls written directly in this body: `jsx`.

SHA-256 of the source span: `aa0e691978eeb87b50240a576a91672a725147422e95428819a92c82e82571ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
