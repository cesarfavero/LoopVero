# `matches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-run-error.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736794-736794](../../../../../../../reference/runtime/host-main.cjs#L736794-L736794) | `ArrowFunctionExpression` | no | `error64` |
| [host:736798-736798](../../../../../../../reference/runtime/host-main.cjs#L736798-L736798) | `ArrowFunctionExpression` | no | `error64` |
| [host:736802-736802](../../../../../../../reference/runtime/host-main.cjs#L736802-L736802) | `ArrowFunctionExpression` | no | `error64` |
| [host:736806-736806](../../../../../../../reference/runtime/host-main.cjs#L736806-L736806) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736794-736794](../../../../../../../reference/runtime/host-main.cjs#L736794-L736794) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:736794 uses an implicit arrow-function return.
| [host:736798-736798](../../../../../../../reference/runtime/host-main.cjs#L736798-L736798) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:736798 uses an implicit arrow-function return.
| [host:736802-736802](../../../../../../../reference/runtime/host-main.cjs#L736802-L736802) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:736802 uses an implicit arrow-function return.
| [host:736806-736806](../../../../../../../reference/runtime/host-main.cjs#L736806-L736806) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:736806 uses an implicit arrow-function return.

### host:736794

Calls written directly in this body: `errorChainIncludes`.

SHA-256 of the source span: `8f59ffda167602342e05d20847701993c88d35a61629d17b814251f9ea81c7f1`.

### host:736798

Calls written directly in this body: `errorChainIncludes`.

SHA-256 of the source span: `944cd4b296ef55d28572a8b4d75badf3e4124ecd3594b77c8954649fab1b9ea3`.

### host:736802

Calls written directly in this body: `chainCarriesMarker`.

SHA-256 of the source span: `90b81b9e6983a31aee37cdf529c5456af07c77e7c04929d7f5cb9575bb4600a1`.

### host:736806

Calls written directly in this body: `findBackendConnectError`, `isTransientStreamError`.

SHA-256 of the source span: `ac8d7fbc0cc9aeccc95a4774f78a91192cda4150212948ea95c6628b3ae93328`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
