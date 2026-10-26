# `isValidOriginRepo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485467-485469](../../../../../../reference/runtime/host-main.cjs#L485467-L485469) | `FunctionDeclaration` | no | `repo` |
| [evaluation:475199-475201](../../../../../../reference/runtime/sand-eval-runner.cjs#L475199-L475201) | `FunctionDeclaration` | no | `repo` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485467-485469](../../../../../../reference/runtime/host-main.cjs#L485467-L485469) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475199-475201](../../../../../../reference/runtime/sand-eval-runner.cjs#L475199-L475201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485467

Calls written directly in this body: `GITHUB_REPO_PATTERN.test`.

SHA-256 of the source span: `e8b1c419ef3651c0b7ac02a306d304d7ed890099536f07f780237b2e13427f88`.

### evaluation:475199

Calls written directly in this body: `GITHUB_REPO_PATTERN.test`.

SHA-256 of the source span: `e8b1c419ef3651c0b7ac02a306d304d7ed890099536f07f780237b2e13427f88`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
