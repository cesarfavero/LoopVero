# `cardHiddenFromChannelForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756066-756068](../../../../../../../reference/runtime/host-main.cjs#L756066-L756068) | `FunctionDeclaration` | não | `host` |
| [evaluation:541967-541969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541967-L541969) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756066-756068](../../../../../../../reference/runtime/host-main.cjs#L756066-L756068) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541967-541969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541967-L541969) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756066

Chamadas escritas diretamente neste corpo: `host.activeTurnRequestSource`, `host.gates.channelCardVisibilityNote`.

SHA-256 do trecho: `aa7ea333881eab34e4ab022fa9c401abc2454916074b916f8be7aa48e138c4d3`.

### evaluation:541967

Chamadas escritas diretamente neste corpo: `host.activeTurnRequestSource`, `host.gates.channelCardVisibilityNote`.

SHA-256 do trecho: `aa7ea333881eab34e4ab022fa9c401abc2454916074b916f8be7aa48e138c4d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
