# `wrapGatewayApiWithServerAgentProxy/getAgentTranscriptPage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492296-492310](../../../../../reference/runtime/host-main.cjs#L492296-L492310) | `ArrowFunctionExpression` | sim | `readArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492296-492310](../../../../../reference/runtime/host-main.cjs#L492296-L492310) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:492296

Chamadas escritas diretamente neste corpo: `api.getAgentTranscriptPage`, `entries.filter`, `proxy.isProxiedAgent`, `readTailUntil`.

SHA-256 do trecho: `d4fe25f221379ea233e38345576814cf551f76f0dd78e336a2f9ac32b267904f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
