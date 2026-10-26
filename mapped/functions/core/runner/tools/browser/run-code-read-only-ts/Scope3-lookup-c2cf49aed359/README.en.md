# `Scope3.lookup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749618-749620](../../../../../../../../reference/runtime/host-main.cjs#L749618-L749620) | `method` | no | `name18` |
| [evaluation:522469-522471](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522469-L522471) | `method` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749618-749620](../../../../../../../../reference/runtime/host-main.cjs#L749618-L749620) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522469-522471](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522469-L522471) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749618

Calls written directly in this body: `this.parent.lookup`, `this.vars.get`.

SHA-256 of the source span: `8a14a7acb7820f9f56711f20f9e3c559985cf97becb64daf3d8f2d670e7eb3f1`.

### evaluation:522469

Calls written directly in this body: `this.parent.lookup`, `this.vars.get`.

SHA-256 of the source span: `8a14a7acb7820f9f56711f20f9e3c559985cf97becb64daf3d8f2d670e7eb3f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
