# `wrapMcpExecutorForLibraryDocs/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/library-docs/library-doc-recorder.ts` · [Module README](../../../../../../modules/core/runner/library-docs/library-doc-recorder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:574141-574163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574141-L574163) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:574141-574163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574141-L574163) | 1 | 0 | 1 | 1 | 0 | 1 |

### evaluation:574141

Calls written directly in this body: `deps.resolveDisplayName`, `errorLogTag`, `extractMcpDocTouches`, `inner.execute`, `mcpArgsJson`, `process.stderr.write`, `recordLibraryDocTouches`.

SHA-256 of the source span: `5b7784af7c6b108277749cbd67728a84ce14fd3add92af8a96f78f2227107a18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
