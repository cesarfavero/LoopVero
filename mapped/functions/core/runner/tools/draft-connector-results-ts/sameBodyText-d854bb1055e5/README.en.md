# `sameBodyText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732833-732836](../../../../../../../reference/runtime/host-main.cjs#L732833-L732836) | `FunctionDeclaration` | no | `left, right` |
| [evaluation:540355-540358](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540355-L540358) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732833-732836](../../../../../../../reference/runtime/host-main.cjs#L732833-L732836) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540355-540358](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540355-L540358) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732833

Calls written directly in this body: `normalize6`.

SHA-256 of the source span: `58a3c686a526f12910a5497493ee4a9a6f3b94084ab2451445d277a89a539025`.

### evaluation:540355

Calls written directly in this body: `normalize6`.

SHA-256 of the source span: `58a3c686a526f12910a5497493ee4a9a6f3b94084ab2451445d277a89a539025`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
