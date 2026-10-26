# `gmailDraftSendRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-draft-send-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-draft-send-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584414-584416](../../../../../../reference/runtime/sand-eval-runner.cjs#L584414-L584416) | `FunctionDeclaration` | no | `fields3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584414-584416](../../../../../../reference/runtime/sand-eval-runner.cjs#L584414-L584416) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584414

Calls written directly in this body: `fields3.join`.

SHA-256 of the source span: `03bd253ed9fdc95ad8960968e085fa48c2c3a24e301a5972e27d4a05b6bde367`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
