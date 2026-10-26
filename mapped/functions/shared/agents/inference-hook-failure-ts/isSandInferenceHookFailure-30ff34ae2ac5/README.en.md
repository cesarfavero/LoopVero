# `isSandInferenceHookFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/agents/inference-hook-failure.ts` · [Module README](../../../../../modules/shared/agents/inference-hook-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736062-736064](../../../../../../reference/runtime/host-main.cjs#L736062-L736064) | `FunctionDeclaration` | no | `kind` |
| [evaluation:589578-589580](../../../../../../reference/runtime/sand-eval-runner.cjs#L589578-L589580) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736062-736064](../../../../../../reference/runtime/host-main.cjs#L736062-L736064) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589578-589580](../../../../../../reference/runtime/sand-eval-runner.cjs#L589578-L589580) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736062

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8bf5a7ee782ec0c70788bf0095a6e200ab766cb7f864637f75728fd4d91f0389`.

### evaluation:589578

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8bf5a7ee782ec0c70788bf0095a6e200ab766cb7f864637f75728fd4d91f0389`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
