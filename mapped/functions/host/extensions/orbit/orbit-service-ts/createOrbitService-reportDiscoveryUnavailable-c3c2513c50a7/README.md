# `createOrbitService/reportDiscoveryUnavailable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/orbit-service.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706248-706254](../../../../../../../reference/runtime/host-main.cjs#L706248-L706254) | `ArrowFunctionExpression` | não | `errorClass` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706248-706254](../../../../../../../reference/runtime/host-main.cjs#L706248-L706254) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:706248

Chamadas escritas diretamente neste corpo: `deps.log`.

Alvos de atribuição ou incremento: `state.discoveryFailureClass`.

SHA-256 do trecho: `4bcf666a824ca5854abc6d3951183f76605ea75fa590062b131de3cd9a2add3b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
