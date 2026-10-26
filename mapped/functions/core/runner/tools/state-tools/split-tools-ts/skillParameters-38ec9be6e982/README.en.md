# `skillParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771807-771817](../../../../../../../../reference/runtime/host-main.cjs#L771807-L771817) | `ArrowFunctionExpression` | no | `teamBot` |
| [evaluation:571040-571050](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571040-L571050) | `ArrowFunctionExpression` | no | `teamBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771807-771817](../../../../../../../../reference/runtime/host-main.cjs#L771807-L771817) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:771807 uses an implicit arrow-function return.
| [evaluation:571040-571050](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571040-L571050) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:571040 uses an implicit arrow-function return.

### host:771807

Calls written directly in this body: `.describe`, `.min`, `.optional`, `.trim`, `external_exports2.enum`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `9a13054702944162ae5543cd8eece020580d4e7c8f0267541c654c053e253359`.

### evaluation:571040

Calls written directly in this body: `.describe`, `.min`, `.optional`, `.trim`, `external_exports3.enum`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `3612b670969688f1c0fec3c743c106b8724e9a35618572e6dfa9d6d16e484651`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
