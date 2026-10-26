# `presenceOnlyHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/presence-only-host.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/presence-only-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568969-569014](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568969-L569014) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568969-569014](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568969-L569014) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:568969

Calls written directly in this body: `.map`, `Object.create`, `Object.entries`, `Object.fromEntries`, `new RegistryResourceAccessor`, `presenceOnlyPort`, `unwired`.

SHA-256 of the source span: `a4308ee6d726d8e40b92f2a2e8d23ad2b103e02953e4c4059dc03909d44ebfb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
