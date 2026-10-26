# `repoUrlAsHttp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509183-509191](../../../../../../../reference/runtime/host-main.cjs#L509183-L509191) | `FunctionDeclaration` | no | `repoUrl` |
| [evaluation:556908-556916](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556908-L556916) | `FunctionDeclaration` | no | `repoUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509183-509191](../../../../../../../reference/runtime/host-main.cjs#L509183-L509191) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:556908-556916](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556908-L556916) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:509183

Calls written directly in this body: `new URL`, `repoUrl.trim`, `trimmed.replace`.

SHA-256 of the source span: `476044d0cb965b7d5f170209ec0f3559b2041da1d73c22265173f203992c9a35`.

### evaluation:556908

Calls written directly in this body: `new URL`, `repoUrl.trim`, `trimmed.replace`.

SHA-256 of the source span: `476044d0cb965b7d5f170209ec0f3559b2041da1d73c22265173f203992c9a35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
