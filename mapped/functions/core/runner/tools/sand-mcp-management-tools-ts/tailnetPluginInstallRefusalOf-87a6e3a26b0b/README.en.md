# `tailnetPluginInstallRefusalOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780059-780067](../../../../../../../reference/runtime/host-main.cjs#L780059-L780067) | `FunctionDeclaration` | no | `error64` |
| [evaluation:580304-580312](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580304-L580312) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780059-780067](../../../../../../../reference/runtime/host-main.cjs#L780059-L780067) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:580304-580312](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580304-L580312) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:780059

Calls written directly in this body: `errorTexts`, `findMcpTailnetPluginInstallRefusal`.

SHA-256 of the source span: `71163e9a541914bf0c1b0e08459b312a4b0d343b019f70fcf51cc44b035cd068`.

### evaluation:580304

Calls written directly in this body: `errorTexts`, `findMcpTailnetPluginInstallRefusal`.

SHA-256 of the source span: `622af0fd08bca11f120ef8f31e1bdf1ce5aabc6f389dc45c79af9ae2adff5bbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
