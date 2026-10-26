# `prepareCredentialFillInPage/formActionAllowed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-page.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-page-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543551-543556](../../../../../../../reference/runtime/host-main.cjs#L543551-L543556) | `ArrowFunctionExpression` | não | `form2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543551-543556](../../../../../../../reference/runtime/host-main.cjs#L543551-L543556) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:543551

Chamadas escritas diretamente neste corpo: `Element.prototype.getAttribute.call`, `document.createElement`, `policy.allowedFormActionOrigins.includes`.

Alvos de atribuição ou incremento: `parser.href`.

SHA-256 do trecho: `ae29d1d4489808ac6f6c28b2a957f89b0e2d7cd8f9d92838abd76d502d69d253`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
