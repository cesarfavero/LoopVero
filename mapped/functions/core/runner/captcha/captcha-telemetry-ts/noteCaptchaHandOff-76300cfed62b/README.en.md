# `noteCaptchaHandOff`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/captcha/captcha-telemetry.ts` · [Module README](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699009-699011](../../../../../../../reference/runtime/host-main.cjs#L699009-L699011) | `FunctionDeclaration` | no | `ctx, handoff2` |
| [evaluation:489597-489599](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489597-L489599) | `FunctionDeclaration` | no | `ctx, handoff2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699009-699011](../../../../../../../reference/runtime/host-main.cjs#L699009-L699011) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489597-489599](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489597-L489599) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:699009

Calls written directly in this body: `.handOff`, `ctx.get`.

SHA-256 of the source span: `d1bfe277abf94a011b5b996f3dcad7d40dee506ff714a71b2a66711eb1cb105e`.

### evaluation:489597

Calls written directly in this body: `.handOff`, `ctx.get`.

SHA-256 of the source span: `d1bfe277abf94a011b5b996f3dcad7d40dee506ff714a71b2a66711eb1cb105e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
