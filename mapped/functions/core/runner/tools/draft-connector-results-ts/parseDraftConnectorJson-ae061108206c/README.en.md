# `parseDraftConnectorJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732662-732668](../../../../../../../reference/runtime/host-main.cjs#L732662-L732668) | `FunctionDeclaration` | no | `text3` |
| [evaluation:540184-540190](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540184-L540190) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732662-732668](../../../../../../../reference/runtime/host-main.cjs#L732662-L732668) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:540184-540190](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540184-L540190) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:732662

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `852cf2772bdd57d147ed5ee01e162650623f987393dd6d19457d2f7493560ba2`.

### evaluation:540184

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `852cf2772bdd57d147ed5ee01e162650623f987393dd6d19457d2f7493560ba2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
