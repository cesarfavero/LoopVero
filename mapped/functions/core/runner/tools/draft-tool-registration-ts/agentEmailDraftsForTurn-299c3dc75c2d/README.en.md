# `agentEmailDraftsForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756014-756016](../../../../../../../reference/runtime/host-main.cjs#L756014-L756016) | `FunctionDeclaration` | no | `host` |
| [evaluation:541892-541894](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541892-L541894) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756014-756016](../../../../../../../reference/runtime/host-main.cjs#L756014-L756016) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541892-541894](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541892-L541894) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756014

Calls written directly in this body: `host.gates.agentEmailDrafts`.

SHA-256 of the source span: `a859a802834d33b54f05f7c72022f62fd99057147ae2d8444d89b158532f3232`.

### evaluation:541892

Calls written directly in this body: `host.gates.agentEmailDrafts`.

SHA-256 of the source span: `a859a802834d33b54f05f7c72022f62fd99057147ae2d8444d89b158532f3232`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
