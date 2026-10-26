# `hidesAppView`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/reminders/mcp-app-not-shown-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/mcp-app-not-shown-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585591-585602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585591-L585602) | `FunctionDeclaration` | yes | `deps, args, providerIdentifier, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585591-585602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585591-L585602) | 5 | 0 | 1 | 5 | 0 | 0 |

### evaluation:585591

Calls written directly in this body: `.then`, `deps.appsShown`, `deps.findTool`, `deps.isAppServer`, `resolveMcpAppResourceUri`.

SHA-256 of the source span: `c2e897d880a218e050fc6c6e850a30f9bf098abc31c0f14fc76845dae9ecf29c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
