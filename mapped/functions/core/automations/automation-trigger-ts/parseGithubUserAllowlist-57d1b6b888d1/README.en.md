# `parseGithubUserAllowlist`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716076-716092](../../../../../../reference/runtime/host-main.cjs#L716076-L716092) | `FunctionDeclaration` | no | `raw` |
| [evaluation:527759-527775](../../../../../../reference/runtime/sand-eval-runner.cjs#L527759-L527775) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716076-716092](../../../../../../reference/runtime/host-main.cjs#L716076-L716092) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:527759-527775](../../../../../../reference/runtime/sand-eval-runner.cjs#L527759-L527775) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:716076

Calls written directly in this body: `Array.isArray`, `login.toLowerCase`, `logins.push`, `new Set`, `normalizeScopeToken`, `seenLogins.add`, `seenLogins.has`, `token.replace`.

SHA-256 of the source span: `d5e929fc60df83e1a506945513a2670c202df80f833ad8008b4e17405a6b98a3`.

### evaluation:527759

Calls written directly in this body: `Array.isArray`, `login.toLowerCase`, `logins.push`, `new Set`, `normalizeScopeToken`, `seenLogins.add`, `seenLogins.has`, `token.replace`.

SHA-256 of the source span: `d5e929fc60df83e1a506945513a2670c202df80f833ad8008b4e17405a6b98a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
