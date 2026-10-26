# `computeRestoredTokenStaleness`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-stale-tokens.js` · [Module README](../../../../modules/agent-engine/summarization-stale-tokens-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:650327-650336](../../../../../reference/runtime/host-main.cjs#L650327-L650336) | `FunctionDeclaration` | no | `args` |
| [evaluation:441980-441989](../../../../../reference/runtime/sand-eval-runner.cjs#L441980-L441989) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:650327-650336](../../../../../reference/runtime/host-main.cjs#L650327-L650336) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:441980-441989](../../../../../reference/runtime/sand-eval-runner.cjs#L441980-L441989) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:650327

Calls written directly in this body: `.some`, `args.messages.slice`.

SHA-256 of the source span: `65d5f073994e7dc53ef8f96091735b8bc140d4c98fd38ab55e52bb3e9d170d6d`.

### evaluation:441980

Calls written directly in this body: `.some`, `args.messages.slice`.

SHA-256 of the source span: `65d5f073994e7dc53ef8f96091735b8bc140d4c98fd38ab55e52bb3e9d170d6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
