# `noteCaptchaAttempt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/captcha/captcha-telemetry.ts` · [Module README](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699006-699008](../../../../../../../reference/runtime/host-main.cjs#L699006-L699008) | `FunctionDeclaration` | no | `ctx, attempt` |
| [evaluation:489594-489596](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489594-L489596) | `FunctionDeclaration` | no | `ctx, attempt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699006-699008](../../../../../../../reference/runtime/host-main.cjs#L699006-L699008) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489594-489596](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489594-L489596) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:699006

Calls written directly in this body: `.noteAttempt`, `ctx.get`.

SHA-256 of the source span: `9713ef0479b2dab08ec2743a83e915db4375a2b9a10cb7c08298a41f18de4629`.

### evaluation:489594

Calls written directly in this body: `.noteAttempt`, `ctx.get`.

SHA-256 of the source span: `9713ef0479b2dab08ec2743a83e915db4375a2b9a10cb7c08298a41f18de4629`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
