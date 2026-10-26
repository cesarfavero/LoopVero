# `_SandAgentRunner.shellWatchHost/setConfirmedUserTurnWatermarkCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:594004-594007](../../../../../../reference/runtime/sand-eval-runner.cjs#L594004-L594007) | `ArrowFunctionExpression` | não | `cache3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594004-594007](../../../../../../reference/runtime/sand-eval-runner.cjs#L594004-L594007) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:594004

Chamadas escritas diretamente neste corpo: `encodeConfirmedUserTurnWatermark`, `this.confirmedUserTurnWatermarkStore.write`.

Alvos de atribuição ou incremento: `this.confirmedUserTurnWatermarkCache`.

SHA-256 do trecho: `fbb325b5ed987bec818c809ffa1f2b0ef8b14d45fc0f3e0795b7d3901716d1fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
