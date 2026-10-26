# `listedValueLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767204-767208](../../../../../../../../reference/runtime/host-main.cjs#L767204-L767208) | `FunctionDeclaration` | no | `values` |
| [evaluation:562723-562727](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562723-L562727) | `FunctionDeclaration` | no | `values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767204-767208](../../../../../../../../reference/runtime/host-main.cjs#L767204-L767208) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562723-562727](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562723-L562727) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767204

Calls written directly in this body: `.map`, `values.toSorted`.

SHA-256 of the source span: `8aa327224b0f475dbf67a8ca9ea09bc5e1ed492b0a94ffe65ca0c286a44587f6`.

### evaluation:562723

Calls written directly in this body: `.map`, `values.toSorted`.

SHA-256 of the source span: `8aa327224b0f475dbf67a8ca9ea09bc5e1ed492b0a94ffe65ca0c286a44587f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
