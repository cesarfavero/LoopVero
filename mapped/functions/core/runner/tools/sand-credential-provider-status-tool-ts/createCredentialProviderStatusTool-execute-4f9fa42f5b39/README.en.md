# `createCredentialProviderStatusTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-provider-status-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-provider-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751750-751762](../../../../../../../reference/runtime/host-main.cjs#L751750-L751762) | `ArrowFunctionExpression` | yes | `_ctx, _args, deps` |
| [evaluation:524816-524828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524816-L524828) | `ArrowFunctionExpression` | yes | `_ctx, _args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751750-751762](../../../../../../../reference/runtime/host-main.cjs#L751750-L751762) | 3 | 0 | 3 | 4 | 0 | 1 |
| [evaluation:524816-524828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524816-L524828) | 3 | 0 | 3 | 4 | 0 | 1 |

### host:751750

Calls written directly in this body: `deps.getStatus`, `errorLogTag`, `loginRoute.route`, `renderConnectedStatus`, `renderNotConnectedRoute`.

SHA-256 of the source span: `27a5696cb5a4d53ce0e033916fa47d5421b30071c5863142973476480ff84cf9`.

### evaluation:524816

Calls written directly in this body: `deps.getStatus`, `errorLogTag`, `loginRoute.route`, `renderConnectedStatus`, `renderNotConnectedRoute`.

SHA-256 of the source span: `4f5e7c632736f3bcdc3f35eac30afe6ca153aa2896a02ea420e7e999767e1ab1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
