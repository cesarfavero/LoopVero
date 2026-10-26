# `refuseConflictingAliases`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/gated-argument-alias.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/gated-argument-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777567-777570](../../../../../../../../reference/runtime/host-main.cjs#L777567-L777570) | `FunctionDeclaration` | no | `spec, log5, ctx` |
| [evaluation:577262-577265](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577262-L577265) | `FunctionDeclaration` | no | `spec, log5, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777567-777570](../../../../../../../../reference/runtime/host-main.cjs#L777567-L777570) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:577262-577265](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577262-L577265) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:777567

Calls written directly in this body: `ctx.addIssue`, `reportShim`, `spec.shim.refused`.

SHA-256 of the source span: `b00e5433c4d65a7bbe9615b1d9aedce7a8a1273531f9e276e64a9e093d3ea9a8`.

### evaluation:577262

Calls written directly in this body: `ctx.addIssue`, `reportShim`, `spec.shim.refused`.

SHA-256 of the source span: `35b765aeed42b95f1a5c93edc811175fe2be6aa3578980e4dd9a7b39865acbd1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
