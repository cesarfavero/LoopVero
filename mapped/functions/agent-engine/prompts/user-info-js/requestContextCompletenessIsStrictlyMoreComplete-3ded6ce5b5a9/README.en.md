# `requestContextCompletenessIsStrictlyMoreComplete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639811-639814](../../../../../../reference/runtime/host-main.cjs#L639811-L639814) | `FunctionDeclaration` | no | `previous, current2` |
| [evaluation:430425-430428](../../../../../../reference/runtime/sand-eval-runner.cjs#L430425-L430428) | `FunctionDeclaration` | no | `previous, current2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639811-639814](../../../../../../reference/runtime/host-main.cjs#L639811-L639814) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430425-430428](../../../../../../reference/runtime/sand-eval-runner.cjs#L430425-L430428) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639811

Calls written directly in this body: `REQUEST_CONTEXT_COMPLETENESS_KEYS.every`, `requestContextCompletenessScore`.

SHA-256 of the source span: `2511e0a2799a3a5b93959190414ef41e5348fdb282cff4763f9b50789b544027`.

### evaluation:430425

Calls written directly in this body: `REQUEST_CONTEXT_COMPLETENESS_KEYS.every`, `requestContextCompletenessScore`.

SHA-256 of the source span: `2511e0a2799a3a5b93959190414ef41e5348fdb282cff4763f9b50789b544027`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
