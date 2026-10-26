# `draftByDefaultForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:541889-541891](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541889-L541891) | `FunctionDeclaration` | no | `host, decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:541889-541891](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541889-L541891) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:541889

Calls written directly in this body: `draftToolAvailableForTurn`, `host.gates.draftExternalMessageByDefault`.

SHA-256 of the source span: `c2b20201b33a27957f0901262a08917715068876816cb25840b1cba28a7ace2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
