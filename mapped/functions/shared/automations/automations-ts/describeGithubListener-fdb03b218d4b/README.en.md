# `describeGithubListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485573-485586](../../../../../../reference/runtime/host-main.cjs#L485573-L485586) | `FunctionDeclaration` | no | `listener` |
| [evaluation:475303-475316](../../../../../../reference/runtime/sand-eval-runner.cjs#L475303-L475316) | `FunctionDeclaration` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485573-485586](../../../../../../reference/runtime/host-main.cjs#L485573-L485586) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:475303-475316](../../../../../../reference/runtime/sand-eval-runner.cjs#L475303-L475316) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:485573

Calls written directly in this body: `joinWithOr`, `listener.events.map`, `listener.userAllowlist.map`.

SHA-256 of the source span: `01d13b5c39f13bfff9f8efbf7393d2a392147175a950a739d6b7181789f7eec9`.

### evaluation:475303

Calls written directly in this body: `joinWithOr`, `listener.events.map`, `listener.userAllowlist.map`.

SHA-256 of the source span: `01d13b5c39f13bfff9f8efbf7393d2a392147175a950a739d6b7181789f7eec9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
