# `allowedFormActionOriginsForFill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548247-548256](../../../../../../../reference/runtime/host-main.cjs#L548247-L548256) | `FunctionDeclaration` | não | `item, expectedOrigin, state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548247-548256](../../../../../../../reference/runtime/host-main.cjs#L548247-L548256) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:548247

Chamadas escritas diretamente neste corpo: `allowed.add`, `allowed.has`, `allowedFormActionOriginsFor`, `matchCredentialItemToSite`, `new Set`, `trustedBrowserOrigin`.

SHA-256 do trecho: `a3aa6b6f8439101d72e77456fdebd9bda5cf9336a861612dfbed68b1aba8a33f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
