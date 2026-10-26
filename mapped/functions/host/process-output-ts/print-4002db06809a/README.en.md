# `print`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/process-output.ts` · [Module README](../../../../modules/host/process-output-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:455763-455765](../../../../../reference/runtime/host-main.cjs#L455763-L455765) | `FunctionExpression` | no | `level, ...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455763-455765](../../../../../reference/runtime/host-main.cjs#L455763-L455765) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:455763

Calls written directly in this body: `console[computed]`.

SHA-256 of the source span: `412d1dca31356a15fa60e6e1d61366cba1fbf2cb61a3e2e1dd2f68cc963d44d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
