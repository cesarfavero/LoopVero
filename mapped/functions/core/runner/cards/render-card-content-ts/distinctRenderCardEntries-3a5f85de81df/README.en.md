# `distinctRenderCardEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-content.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-content-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758008-758016](../../../../../../../reference/runtime/host-main.cjs#L758008-L758016) | `FunctionDeclaration` | no | `entries` |
| [evaluation:544106-544114](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544106-L544114) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758008-758016](../../../../../../../reference/runtime/host-main.cjs#L758008-L758016) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544106-544114](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544106-L544114) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:758008

Calls written directly in this body: `entries.filter`, `new Set`.

SHA-256 of the source span: `7b7f46f3ae444fcefbc848525bfe192d88fc3e2dfda3321fe7041ee4c9b688fd`.

### evaluation:544106

Calls written directly in this body: `entries.filter`, `new Set`.

SHA-256 of the source span: `7b7f46f3ae444fcefbc848525bfe192d88fc3e2dfda3321fe7041ee4c9b688fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
