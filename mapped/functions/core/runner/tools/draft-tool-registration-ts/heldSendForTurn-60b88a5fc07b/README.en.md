# `heldSendForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:541895-541897](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541895-L541897) | `FunctionDeclaration` | no | `host, decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:541895-541897](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541895-L541897) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:541895

Calls written directly in this body: `draftByDefaultForTurn`, `host.gates.autoReviewSelector`.

SHA-256 of the source span: `ed84accdda9119b11996e6f26014a1720096c539b127e474fe5b8148e822597d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
