# `rankByTerms`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/plugin-search/plugin-search.ts` · [Module README](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779513-779518](../../../../../../../../reference/runtime/host-main.cjs#L779513-L779518) | `FunctionDeclaration` | no | `plugins, terms, score` |
| [evaluation:579751-579756](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579751-L579756) | `FunctionDeclaration` | no | `plugins, terms, score` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779513-779518](../../../../../../../../reference/runtime/host-main.cjs#L779513-L779518) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579751-579756](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579751-L579756) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779513

Calls written directly in this body: `.filter`, `.map`, `.sort`, `plugins.map`.

SHA-256 of the source span: `cb153c3a9ca7e9fb58ec3df7271cd7e487eacc772f31e6f7a2ea4490f2db52f0`.

### evaluation:579751

Calls written directly in this body: `.filter`, `.map`, `.sort`, `plugins.map`.

SHA-256 of the source span: `df449216effe8d9a895f92df2616427361646ad7da859dd3f7455e96a8bfbfa7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
