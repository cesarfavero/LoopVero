# `createHostGatewayApi/deliverBrokeredCredentialSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493158-493163](../../../../../reference/runtime/host-main.cjs#L493158-L493163) | `ArrowFunctionExpression` | sim | `material` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493158-493163](../../../../../reference/runtime/host-main.cjs#L493158-L493163) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:493158

Chamadas escritas diretamente neste corpo: `broker.receiveSession`, `deps.extensions.api`.

SHA-256 do trecho: `0cf23039c9dc789a88478ae2b3acea15a6d109d8e3334fbdc2a7f595f245edde`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
