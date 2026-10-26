# `parseRejectedCodebase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541270-541275](../../../../../../../reference/runtime/host-main.cjs#L541270-L541275) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541270-541275](../../../../../../../reference/runtime/host-main.cjs#L541270-L541275) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:541270

Chamadas escritas diretamente neste corpo: `hasExactKeys`, `new CsnapsProtocolError`.

Alvos de lançamento explícito: `CsnapsProtocolError`.

SHA-256 do trecho: `9a8c2362255f38d3f24e438c84ce487ffc4d63a3e02eaeeaf90bb0d9766cdf99`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
