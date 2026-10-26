# `createSentLinkChecks/noteToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/link-checks/sent-link-checks.ts` · [README do módulo](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583490-583502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583490-L583502) | `ArrowFunctionExpression` | não | `event, toolCall2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583490-583502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583490-L583502) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583490

Chamadas escritas diretamente neste corpo: `addBounded`, `command.slice`, `linkKey2`.

SHA-256 do trecho: `296a030cd96f22a1e264c6db90f1b9f0e242537ccf676d4c133f48ca4062e9dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
