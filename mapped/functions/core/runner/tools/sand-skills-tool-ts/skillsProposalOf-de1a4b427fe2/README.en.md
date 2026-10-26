# `skillsProposalOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/sand-skills-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-skills-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536014-536024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536014-L536024) | `FunctionDeclaration` | no | `args, library` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536014-536024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536014-L536024) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:536014

Calls written directly in this body: `new Set`, `resolveItems`, `skills.drafts.slice`, `suggestions.drafts.slice`.

SHA-256 of the source span: `97e5032fa5c870fe09177071b4afbed2066aee606fed8bb47405a9b52d2069f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
