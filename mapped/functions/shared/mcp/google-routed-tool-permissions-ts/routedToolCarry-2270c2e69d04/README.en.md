# `routedToolCarry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687138-687142](../../../../../../reference/runtime/host-main.cjs#L687138-L687142) | `FunctionDeclaration` | no | `args` |
| [evaluation:579273-579277](../../../../../../reference/runtime/sand-eval-runner.cjs#L579273-L579277) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687138-687142](../../../../../../reference/runtime/host-main.cjs#L687138-L687142) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579273-579277](../../../../../../reference/runtime/sand-eval-runner.cjs#L579273-L579277) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:687138

Calls written directly in this body: `carry.rows.includes`, `found.connector.tools.get`, `rowConnector`.

SHA-256 of the source span: `5c3c4bae037d5d302ac6208aa080f6444ca54029b2e4e58ba6f8cb81a5bbc65c`.

### evaluation:579273

Calls written directly in this body: `carry.rows.includes`, `found.connector.tools.get`, `rowConnector`.

SHA-256 of the source span: `5c3c4bae037d5d302ac6208aa080f6444ca54029b2e4e58ba6f8cb81a5bbc65c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
