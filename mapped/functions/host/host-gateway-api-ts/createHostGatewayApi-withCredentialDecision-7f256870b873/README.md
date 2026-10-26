# `createHostGatewayApi/withCredentialDecision`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492342-492350](../../../../../reference/runtime/host-main.cjs#L492342-L492350) | `ArrowFunctionExpression` | sim | `entryId, alreadyInFlight, decide` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492342-492350](../../../../../reference/runtime/host-main.cjs#L492342-L492350) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:492342

Chamadas escritas diretamente neste corpo: `credentialDecisionsInFlight.add`, `credentialDecisionsInFlight.delete`, `credentialDecisionsInFlight.has`, `decide`.

SHA-256 do trecho: `dd8a683e0bfbd85e6608d81f007f01e1ad7563af2fa030cd66a25cf10eed0c5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
