# `buildServerIdentifierParameterSchemas`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779643-779678](../../../../../../../reference/runtime/host-main.cjs#L779643-L779678) | `FunctionDeclaration` | no | `mcpMetaToolNames` |
| [evaluation:579881-579916](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579881-L579916) | `FunctionDeclaration` | no | `mcpMetaToolNames` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779643-779678](../../../../../../../reference/runtime/host-main.cjs#L779643-L779678) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579881-579916](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579881-L579916) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779643

Calls written directly in this body: `.describe`, `.min`, `.optional`, `.trim`, `accountLifecycleParameters.extend`, `external_exports2.object`, `external_exports2.string`, `serverIdParameters.extend`.

SHA-256 of the source span: `00df942c742d9edfe0074f122b49a5b982c85036c7c8d4d6b192edf0ee779078`.

### evaluation:579881

Calls written directly in this body: `.describe`, `.min`, `.optional`, `.trim`, `accountLifecycleParameters.extend`, `external_exports3.object`, `external_exports3.string`, `serverIdParameters.extend`.

SHA-256 of the source span: `7c419de5aa6f1ee3c97aa6f7435e20313f609242137690ffad6ad44baf4e42bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
