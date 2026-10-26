# `withToolDecisions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490023-490028](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490023-L490028) | `FunctionDeclaration` | não | `executor, audit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490023-490028](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490023-L490028) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490023

Chamadas escritas diretamente neste corpo: `new DecisionRecordingClassifierExecutor`.

SHA-256 do trecho: `c10fcc97b814e999c3c8c3c5d95e100a5fb487c8c883dd8ab8e3bd50a4470e38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
