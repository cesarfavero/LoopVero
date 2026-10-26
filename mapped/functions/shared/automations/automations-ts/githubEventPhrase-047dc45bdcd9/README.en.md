# `githubEventPhrase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485550-485552](../../../../../../reference/runtime/host-main.cjs#L485550-L485552) | `FunctionDeclaration` | no | `kind` |
| [evaluation:475280-475282](../../../../../../reference/runtime/sand-eval-runner.cjs#L475280-L475282) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485550-485552](../../../../../../reference/runtime/host-main.cjs#L485550-L485552) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475280-475282](../../../../../../reference/runtime/sand-eval-runner.cjs#L475280-L475282) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485550

Calls written directly in this body: `GITHUB_EVENT_KINDS.indexOf`.

SHA-256 of the source span: `eab117711de326505c401708ee5b1aaf81b2f80b8455de535258e58b96766448`.

### evaluation:475280

Calls written directly in this body: `GITHUB_EVENT_KINDS.indexOf`.

SHA-256 of the source span: `eab117711de326505c401708ee5b1aaf81b2f80b8455de535258e58b96766448`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
