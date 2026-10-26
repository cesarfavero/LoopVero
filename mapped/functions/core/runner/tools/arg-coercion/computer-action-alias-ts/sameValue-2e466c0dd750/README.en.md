# `sameValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/arg-coercion/computer-action-alias.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/computer-action-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776784-776786](../../../../../../../../reference/runtime/host-main.cjs#L776784-L776786) | `FunctionDeclaration` | no | `sent, implied` |
| [evaluation:576429-576431](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576429-L576431) | `FunctionDeclaration` | no | `sent, implied` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776784-776786](../../../../../../../../reference/runtime/host-main.cjs#L776784-L776786) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576429-576431](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576429-L576431) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776784

Calls written directly in this body: `.toLowerCase`, `String`.

SHA-256 of the source span: `f57d8d4e57640e0e73aad264fd7039d15660cd5d05067718ac878a7dbb7891c1`.

### evaluation:576429

Calls written directly in this body: `.toLowerCase`, `String`.

SHA-256 of the source span: `f57d8d4e57640e0e73aad264fd7039d15660cd5d05067718ac878a7dbb7891c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
