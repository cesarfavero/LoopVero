# `withPluginGuideReminderWhenOn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585884-585886](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585884-L585886) | `FunctionDeclaration` | no | `executor, turnToolHost, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585884-585886](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585884-L585886) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585884

Calls written directly in this body: `allowsSystemReminder`, `turnToolHost.gates.pluginGuideReminder`, `withPluginGuideReminder`.

SHA-256 of the source span: `c005eb77b70c5deb394ce4c585c15cd7d2df85a5a0ea2ae704dd86feaf2430fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
