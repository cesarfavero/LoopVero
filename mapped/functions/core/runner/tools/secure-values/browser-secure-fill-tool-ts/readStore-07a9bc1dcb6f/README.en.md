# `readStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766803-766810](../../../../../../../../reference/runtime/host-main.cjs#L766803-L766810) | `FunctionDeclaration` | yes | `ctx, read2` |
| [evaluation:562322-562329](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562322-L562329) | `FunctionDeclaration` | yes | `ctx, read2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766803-766810](../../../../../../../../reference/runtime/host-main.cjs#L766803-L766810) | 1 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:562322-562329](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562322-L562329) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:766803

Calls written directly in this body: `.recordException`, `String`, `getSpan2`, `read2`.

SHA-256 of the source span: `f2814151601e25825c3f8dbebe405f1a8a40e34d3657dafd44956e503f30b2ea`.

### evaluation:562322

Calls written directly in this body: `.recordException`, `String`, `getSpan2`, `read2`.

SHA-256 of the source span: `3ac91c9417b430957541c3cc8b2d2b0b7b5326f5903b0560ebe764d927539815`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
