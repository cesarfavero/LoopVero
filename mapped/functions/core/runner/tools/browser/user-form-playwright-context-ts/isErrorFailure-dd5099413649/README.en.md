# `isErrorFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767482-767486](../../../../../../../../reference/runtime/host-main.cjs#L767482-L767486) | `FunctionDeclaration` | no | `text3` |
| [evaluation:562999-563003](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562999-L563003) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767482-767486](../../../../../../../../reference/runtime/host-main.cjs#L767482-L767486) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:562999-563003](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562999-L563003) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:767482

Calls written directly in this body: `PLAYWRIGHT_UNKNOWN_TOOL_REFUSAL.test`, `text3.includes`.

SHA-256 of the source span: `72be033b98431e6e73848853fb0108a9bc43cf2e6d8059d035ffff4461e7ceb9`.

### evaluation:562999

Calls written directly in this body: `PLAYWRIGHT_UNKNOWN_TOOL_REFUSAL.test`, `text3.includes`.

SHA-256 of the source span: `72be033b98431e6e73848853fb0108a9bc43cf2e6d8059d035ffff4461e7ceb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
