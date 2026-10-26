# `buildSandSubagentSteerReviewTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/sand-subagent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780775-780784](../../../../../../reference/runtime/host-main.cjs#L780775-L780784) | `FunctionDeclaration` | no | `args` |
| [evaluation:581123-581132](../../../../../../reference/runtime/sand-eval-runner.cjs#L581123-L581132) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780775-780784](../../../../../../reference/runtime/host-main.cjs#L780775-L780784) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581123-581132](../../../../../../reference/runtime/sand-eval-runner.cjs#L581123-L581132) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:780775

Calls written directly in this body: `args.message.trim`.

SHA-256 of the source span: `4c85b5cd09b6216d143f5b5ff1e5a53984af650403a16a4acf6877bb7bf29618`.

### evaluation:581123

Calls written directly in this body: `args.message.trim`.

SHA-256 of the source span: `4c85b5cd09b6216d143f5b5ff1e5a53984af650403a16a4acf6877bb7bf29618`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
