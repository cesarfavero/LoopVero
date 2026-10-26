# `privateTeamsDm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/session-context-prompt.ts` · [Module README](../../../../../modules/core/runner/session-context-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538366-538370](../../../../../../reference/runtime/sand-eval-runner.cjs#L538366-L538370) | `FunctionDeclaration` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538366-538370](../../../../../../reference/runtime/sand-eval-runner.cjs#L538366-L538370) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538366

Calls written directly in this body: `session.sessionId.startsWith`.

SHA-256 of the source span: `6aff4733f19dfc76f042811f9f6498bf14545642708724ff6b934fa79ca01622`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
