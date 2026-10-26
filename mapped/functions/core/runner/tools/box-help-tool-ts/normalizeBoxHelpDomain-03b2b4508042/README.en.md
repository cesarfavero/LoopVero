# `normalizeBoxHelpDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/box-help-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725299-725302](../../../../../../../reference/runtime/host-main.cjs#L725299-L725302) | `FunctionDeclaration` | no | `raw` |
| [evaluation:560385-560388](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560385-L560388) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725299-725302](../../../../../../../reference/runtime/host-main.cjs#L725299-L725302) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560385-560388](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560385-L560388) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:725299

Calls written directly in this body: `.replace`, `boxHelpHost`.

SHA-256 of the source span: `5dc05c6c46e849d7cd942e1f169989308a9bc594b9065e55568d2e784cc9be58`.

### evaluation:560385

Calls written directly in this body: `.replace`, `boxHelpHost`.

SHA-256 of the source span: `5dc05c6c46e849d7cd942e1f169989308a9bc594b9065e55568d2e784cc9be58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
