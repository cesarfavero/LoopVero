# `agentProposedRule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756290-756299](../../../../../../../reference/runtime/host-main.cjs#L756290-L756299) | `FunctionDeclaration` | no | `proposed, saved, allowed` |
| [evaluation:542211-542220](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542211-L542220) | `FunctionDeclaration` | no | `proposed, saved, allowed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756290-756299](../../../../../../../reference/runtime/host-main.cjs#L756290-L756299) | 6 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:542211-542220](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542211-L542220) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:756290

Calls written directly in this body: `allowed`, `isInsertionOnlyRuleEdit`, `offerable`, `saved.includes`.

SHA-256 of the source span: `0802597177c7a245a10dab2d33e06e970818c28e957060d18980e15fab5b50a5`.

### evaluation:542211

Calls written directly in this body: `allowed`, `isInsertionOnlyRuleEdit`, `offerable`, `saved.includes`.

SHA-256 of the source span: `0802597177c7a245a10dab2d33e06e970818c28e957060d18980e15fab5b50a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
