# `createOrbitService/requestChromeDiscovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/orbit-service.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706276-706295](../../../../../../../reference/runtime/host-main.cjs#L706276-L706295) | `ArrowFunctionExpression` | não | `discoveryGeneration` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706276-706295](../../../../../../../reference/runtime/host-main.cjs#L706276-L706295) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:706276

Chamadas escritas diretamente neste corpo: `.catch`, `.finally`, `Promise.resolve`, `refreshChromePorts`.

Alvos de atribuição ou incremento: `state.inFlightChromeDiscovery`.

SHA-256 do trecho: `a8bb5733261de9ce71de2f6c35a8d014e2b1d808d47963d1d3bfd8f28d45eb2b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
