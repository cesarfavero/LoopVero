# `classifyMcpInvocation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539034-539041](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539034-L539041) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539034-539041](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539034-L539041) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:539034

Calls written directly in this body: `mcpInvocationArgsSchema.safeParse`.

SHA-256 of the source span: `754ec62809a1458dd056396d505f0362bf41f1bee3496c4d476740ffd230bdfe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
