# `getUserMessageText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/send-message-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483082-483092](../../../../../../reference/runtime/sand-eval-runner.cjs#L483082-L483092) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483082-483092](../../../../../../reference/runtime/sand-eval-runner.cjs#L483082-L483092) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:483082

Calls written directly in this body: `.join`, `.map`, `message.content.filter`.

SHA-256 of the source span: `a76bcc1fa1e60441652ec46a1660b4ef12c569161e05b52af7a61e53bfa34f02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
