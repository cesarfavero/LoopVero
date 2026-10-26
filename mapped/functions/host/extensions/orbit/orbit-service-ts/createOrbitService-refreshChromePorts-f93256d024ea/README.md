# `createOrbitService/refreshChromePorts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/orbit-service.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706255-706275](../../../../../../../reference/runtime/host-main.cjs#L706255-L706275) | `ArrowFunctionExpression` | sim | `discoveryGeneration, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706255-706275](../../../../../../../reference/runtime/host-main.cjs#L706255-L706275) | 5 | 0 | 1 | 5 | 0 | 0 |

### host:706255

Chamadas escritas diretamente neste corpo: `deps.discoverChromeCdpPorts`, `publishSessionTarget`, `reportDiscoveryUnavailable`, `samePorts2`.

Alvos de atribuição ou incremento: `state.cdpPorts`, `state.discoveryFailureClass`.

SHA-256 do trecho: `2eefa739712026c39451b90039e7196d23389628b6c964384c381af7e958afc8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
