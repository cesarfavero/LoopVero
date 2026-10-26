# `wrapGatewayApiWithServerAgentProxy/getAgentThread`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492311-492321](../../../../../reference/runtime/host-main.cjs#L492311-L492321) | `ArrowFunctionExpression` | sim | `threadArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492311-492321](../../../../../reference/runtime/host-main.cjs#L492311-L492321) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:492311

Chamadas escritas diretamente neste corpo: `api.getAgentThread`, `gatewayAgentId`, `getThreadTranscriptEntries`, `proxy.isProxiedAgent`, `readTailUntil`.

SHA-256 do trecho: `febf2bba442fbbe69c12ff11735926c119530ff3596847adc7073ca9e000f80d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
