# `propertiesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555861-555864](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555861-L555864) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555861-555864](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555861-L555864) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555861

Calls written directly in this body: `Object.keys`, `new Set`, `objectSchema2.safeParse`.

SHA-256 of the source span: `dc8379e1dc63756eed88eb579fea788a26fa2212170c6a024144bc6035f155c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
