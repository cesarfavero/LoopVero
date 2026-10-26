# `readOptionalNamedArgument`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/secrets.ts` · [Module README](../../../../modules/evaluation/secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630664-630670](../../../../../reference/runtime/sand-eval-runner.cjs#L630664-L630670) | `FunctionDeclaration` | no | `argv, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630664-630670](../../../../../reference/runtime/sand-eval-runner.cjs#L630664-L630670) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:630664

Calls written directly in this body: `argv.indexOf`, `value.startsWith`.

SHA-256 of the source span: `275b71959f2edec6253e20949b5e1078e42b309719582e288db0d0858c767296`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
