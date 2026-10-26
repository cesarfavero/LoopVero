# `ignoredDraftSendFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-draft-send-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-draft-send-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584410-584413](../../../../../../reference/runtime/sand-eval-runner.cjs#L584410-L584413) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584410-584413](../../../../../../reference/runtime/sand-eval-runner.cjs#L584410-L584413) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584410

Calls written directly in this body: `DRAFT_OVERRIDE_FIELDS.filter`, `isProvided`, `isSendMessage`.

SHA-256 of the source span: `aba578ed8a1cc2c09b532e8378ddfac9c3710acd840da694d6caa0f76f878c9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
