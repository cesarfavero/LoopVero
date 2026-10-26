# `scrollAmountSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776901-776903](../../../../../../../reference/runtime/host-main.cjs#L776901-L776903) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:576546-576548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576546-L576548) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776901-776903](../../../../../../../reference/runtime/host-main.cjs#L776901-L776903) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576546-576548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576546-L576548) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776901

Calls written directly in this body: `.int`, `.refine`, `external_exports2.number`.

SHA-256 of the source span: `85bd5eec37bfc351b679ea9cfd95cb56e9fa68673ea93509992733f431b32a55`.

### evaluation:576546

Calls written directly in this body: `.int`, `.refine`, `external_exports3.number`.

SHA-256 of the source span: `a91d9915c263f4210e867c8e2e3bfe5b6e64f8e45a10168e9bc5a5d54b8ecdab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
