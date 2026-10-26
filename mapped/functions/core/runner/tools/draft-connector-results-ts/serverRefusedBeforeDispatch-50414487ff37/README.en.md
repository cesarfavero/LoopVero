# `serverRefusedBeforeDispatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732981-732990](../../../../../../../reference/runtime/host-main.cjs#L732981-L732990) | `FunctionDeclaration` | no | `error64` |
| [evaluation:540503-540512](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540503-L540512) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732981-732990](../../../../../../../reference/runtime/host-main.cjs#L732981-L732990) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540503-540512](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540503-L540512) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:732981

Calls written directly in this body: `answer.indexOf`, `answer.slice`, `error64.error.indexOf`, `error64.error.slice`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `c665435c9e12f048ca33fafa3134ae388ef2318f997f24cd6be306aa87e898ec`.

### evaluation:540503

Calls written directly in this body: `answer.indexOf`, `answer.slice`, `error63.error.indexOf`, `error63.error.slice`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `d4e6643039f5dd64c1a9a844a8f71ec6245ed5dd2a96ef31f45638a9547d208e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
