# `createSecureValueGuard/textRedactor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767781-767788](../../../../../../../../reference/runtime/host-main.cjs#L767781-L767788) | `ArrowFunctionExpression` | yes | `ctx, tool` |
| [evaluation:563298-563305](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563298-L563305) | `ArrowFunctionExpression` | yes | `ctx, tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767781-767788](../../../../../../../../reference/runtime/host-main.cjs#L767781-L767788) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:563298-563305](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563298-L563305) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:767781

Calls written directly in this body: `counted2`, `redactor`, `undecryptedValueWithheld`.

SHA-256 of the source span: `568cb0717b5bd6a842ab32f37ddcdce861acdcffaf491fe6eef672813f382315`.

### evaluation:563298

Calls written directly in this body: `counted2`, `redactor`, `undecryptedValueWithheld`.

SHA-256 of the source span: `568cb0717b5bd6a842ab32f37ddcdce861acdcffaf491fe6eef672813f382315`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
