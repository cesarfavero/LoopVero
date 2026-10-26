# `withGatedArgumentAlias`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/gated-argument-alias.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/gated-argument-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777592-777592](../../../../../../../../reference/runtime/host-main.cjs#L777592-L777592) | `ArrowFunctionExpression` | no | `schema3, spec, enabled` |
| [evaluation:577287-577287](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577287-L577287) | `ArrowFunctionExpression` | no | `schema3, spec, enabled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777592-777592](../../../../../../../../reference/runtime/host-main.cjs#L777592-L777592) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:777592 uses an implicit arrow-function return.
| [evaluation:577287-577287](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577287-L577287) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:577287 uses an implicit arrow-function return.

### host:777592

Calls written directly in this body: `external_exports2.preprocess`.

SHA-256 of the source span: `7beee730f0067a60180ee3193214026de6d2174995392845cf57d5590d12e327`.

### evaluation:577287

Calls written directly in this body: `external_exports3.preprocess`.

SHA-256 of the source span: `24a568c38dd9fadffb5ef4cd47428ec9a758908ff061d1b231679c170257226e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
