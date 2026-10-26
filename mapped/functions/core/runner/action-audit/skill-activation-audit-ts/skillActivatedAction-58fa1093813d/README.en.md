# `skillActivatedAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/action-audit/skill-activation-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/skill-activation-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534919-534928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534919-L534928) | `FunctionDeclaration` | no | `options2, catalog` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534919-534928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534919-L534928) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:534919

Calls written directly in this body: `options2.skillId.trim`, `skillActivationSource`, `skillActivationTrigger`.

SHA-256 of the source span: `ff264983c584303a28467dceba7396815959ee45d9c077b5c47efcb51cd58f5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
