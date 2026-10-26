# `wrapGatewayApiWithServerAgentProxy/getAgentTranscriptWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492285-492295](../../../../../reference/runtime/host-main.cjs#L492285-L492295) | `ArrowFunctionExpression` | sim | `readArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492285-492295](../../../../../reference/runtime/host-main.cjs#L492285-L492295) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:492285

Chamadas escritas diretamente neste corpo: `api.getAgentTranscriptWindow`, `proxy.isProxiedAgent`, `readTailUntil`, `windowOf`.

SHA-256 do trecho: `dfe0b44bbd81a8aeab11e2ac5ad559fd684ef97ec07c620b6ee9546df9b7c639`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
