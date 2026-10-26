# `parseResponseFrame`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-approval-gateway.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-approval-gateway-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486006-486061](../../../../../../reference/runtime/host-main.cjs#L486006-L486061) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486006-486061](../../../../../../reference/runtime/host-main.cjs#L486006-L486061) | 13 | 1 | 0 | 8 | 0 | 0 |

### host:486006

Calls written directly in this body: `cookies.push`, `hasUnknownKind`, `parseChromeCookieRecord`, `parseCookieOriginApprovalRefusalReason`, `parseCookieOriginGrants`, `parseItems`, `sandCookieOriginApprovalFailedSchema.safeParse`, `sandCookieOriginApprovalHelloSchema.safeParse`, `sandCookieOriginApprovalListedSchema.safeParse`, `sandCookieOriginApprovalPingSchema.safeParse`, `sandCookieOriginApprovalRefusedSchema.safeParse`, `sandCookieOriginApprovalResolvedSchema.safeParse`.

SHA-256 of the source span: `782b04cb8e74dfd694f1505d66ba3c0de206c202317ab83022ec444b1ecc9c85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
