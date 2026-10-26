# `forgetFallbackArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771691-771699](../../../../../../../../reference/runtime/host-main.cjs#L771691-L771699) | `FunctionDeclaration` | no | `args, deps` |
| [evaluation:570924-570932](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570924-L570932) | `FunctionDeclaration` | no | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771691-771699](../../../../../../../../reference/runtime/host-main.cjs#L771691-L771699) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:570924-570932](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570924-L570932) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:771691

Calls written directly in this body: `isTeamBot`.

SHA-256 of the source span: `0d34fd35fd8ee75b25402152130597c2ab11d1bfbf4174c9e479aa64bf30f399`.

### evaluation:570924

Calls written directly in this body: `isTeamBot`.

SHA-256 of the source span: `0d34fd35fd8ee75b25402152130597c2ab11d1bfbf4174c9e479aa64bf30f399`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
