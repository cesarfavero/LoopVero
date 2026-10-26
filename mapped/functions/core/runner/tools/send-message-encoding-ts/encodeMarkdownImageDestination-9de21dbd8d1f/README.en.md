# `encodeMarkdownImageDestination`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-encoding.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-encoding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759984-759986](../../../../../../../reference/runtime/host-main.cjs#L759984-L759986) | `FunctionDeclaration` | no | `url2` |
| [evaluation:550588-550590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550588-L550590) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759984-759986](../../../../../../../reference/runtime/host-main.cjs#L759984-L759986) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550588-550590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550588-L550590) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759984

Calls written directly in this body: `url2.replace`.

SHA-256 of the source span: `f085806eeb540b323085eca20ce509e690497be8bb44130c1a86f3ffd3211312`.

### evaluation:550588

Calls written directly in this body: `url2.replace`.

SHA-256 of the source span: `f085806eeb540b323085eca20ce509e690497be8bb44130c1a86f3ffd3211312`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
