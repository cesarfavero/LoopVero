# `parseGithubListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716097-716131](../../../../../../reference/runtime/host-main.cjs#L716097-L716131) | `FunctionDeclaration` | no | `value` |
| [evaluation:527780-527814](../../../../../../reference/runtime/sand-eval-runner.cjs#L527780-L527814) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716097-716131](../../../../../../reference/runtime/host-main.cjs#L716097-L716131) | 10 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:527780-527814](../../../../../../reference/runtime/sand-eval-runner.cjs#L527780-L527814) | 10 | 1 | 0 | 4 | 0 | 0 |

### host:716097

Calls written directly in this body: `Array.isArray`, `Number.isSafeInteger`, `events.some`, `isGithubEventKind`, `isValidGithubRepo`, `normalizeScopeToken`, `parseCiBranch`, `parseGithubUserAllowlist`, `parsedEvents.filter`, `parsedEvents.includes`, `parsedEvents.push`, `triggerParseFailure`.

SHA-256 of the source span: `3d0e85012c76e96d044f08c542c02480412761c313725bb5c6e32a2236652e2e`.

### evaluation:527780

Calls written directly in this body: `Array.isArray`, `Number.isSafeInteger`, `events.some`, `isGithubEventKind`, `isValidGithubRepo`, `normalizeScopeToken`, `parseCiBranch`, `parseGithubUserAllowlist`, `parsedEvents.filter`, `parsedEvents.includes`, `parsedEvents.push`, `triggerParseFailure`.

SHA-256 of the source span: `3d0e85012c76e96d044f08c542c02480412761c313725bb5c6e32a2236652e2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
