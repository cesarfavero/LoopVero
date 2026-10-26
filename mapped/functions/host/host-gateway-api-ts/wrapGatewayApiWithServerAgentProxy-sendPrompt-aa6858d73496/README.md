# `wrapGatewayApiWithServerAgentProxy/sendPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492012-492020](../../../../../reference/runtime/host-main.cjs#L492012-L492020) | `ArrowFunctionExpression` | sim | `sendArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492012-492020](../../../../../reference/runtime/host-main.cjs#L492012-L492020) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:492012

Chamadas escritas diretamente neste corpo: `act`, `api.sendPrompt`, `proxy.isProxiedAgent`.

SHA-256 do trecho: `7d5a2e0c2b5e18241bed4fc4618dadde3f87d31f924c31346e65f945cd41992a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
