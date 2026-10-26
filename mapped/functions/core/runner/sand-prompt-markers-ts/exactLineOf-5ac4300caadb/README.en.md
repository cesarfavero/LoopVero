# `exactLineOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491222-491224](../../../../../../reference/runtime/host-main.cjs#L491222-L491224) | `FunctionDeclaration` | no | `lines2` |
| [evaluation:526140-526142](../../../../../../reference/runtime/sand-eval-runner.cjs#L526140-L526142) | `FunctionDeclaration` | no | `lines2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491222-491224](../../../../../../reference/runtime/host-main.cjs#L491222-L491224) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526140-526142](../../../../../../reference/runtime/sand-eval-runner.cjs#L526140-L526142) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491222

Calls written directly in this body: `.join`, `lines2.map`, `new RegExp`.

SHA-256 of the source span: `04abd3d3e0e4413d31800d27fd92cc1a9b51b1a6258c4b81744b08883230c416`.

### evaluation:526140

Calls written directly in this body: `.join`, `lines2.map`, `new RegExp`.

SHA-256 of the source span: `dc2f4c2423bbb0d0646b72c7e36428dbf6301c3f8d231c597bc1d90b53884b80`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
