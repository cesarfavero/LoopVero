# `parseDraftConnectorRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732681-732685](../../../../../../../reference/runtime/host-main.cjs#L732681-L732685) | `FunctionDeclaration` | no | `text3` |
| [evaluation:540203-540207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540203-L540207) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732681-732685](../../../../../../../reference/runtime/host-main.cjs#L732681-L732685) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540203-540207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540203-L540207) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:732681

Calls written directly in this body: `Object.entries`, `Object.fromEntries`, `parseDraftConnectorJson`.

SHA-256 of the source span: `79f6df484547e6858410f27016e612d1edddb7c207f3c02d4578bb03ba3c546b`.

### evaluation:540203

Calls written directly in this body: `Object.entries`, `Object.fromEntries`, `parseDraftConnectorJson`.

SHA-256 of the source span: `4a77b066efe7bd142c5f0525b3d22304d9db68a50b7adcf2a3d28b81d03d03d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
