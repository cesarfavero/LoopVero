# `startWorkingStateExport/isTurnInFlight`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786075-786075](../../../../../../../reference/runtime/host-main.cjs#L786075-L786075) | `ArrowFunctionExpression` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786075-786075](../../../../../../../reference/runtime/host-main.cjs#L786075-L786075) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:786075 usa retorno implícito de arrow function.

### host:786075

Chamadas escritas diretamente neste corpo: `.has`, `context2.deps.transcript.liveRunningAgentIds`.

SHA-256 do trecho: `0129ab8d61c9698130b98293cc82ec969cce49ec5f46ca081beccb1c7ffd6402`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
