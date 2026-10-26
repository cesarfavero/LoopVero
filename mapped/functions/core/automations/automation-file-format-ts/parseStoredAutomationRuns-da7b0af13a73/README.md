# `parseStoredAutomationRuns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716596-716611](../../../../../../reference/runtime/host-main.cjs#L716596-L716611) | `FunctionDeclaration` | não | `raw` |
| [evaluation:627310-627325](../../../../../../reference/runtime/sand-eval-runner.cjs#L627310-L627325) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716596-716611](../../../../../../reference/runtime/host-main.cjs#L716596-L716611) | 2 | 1 | 0 | 2 | 0 | 1 |
| [evaluation:627310-627325](../../../../../../reference/runtime/sand-eval-runner.cjs#L627310-L627325) | 2 | 1 | 0 | 2 | 0 | 1 |

### host:716596

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `parseStoredAutomationRun`, `runs.push`, `runs.slice`, `runs.sort`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `ff67a4fed19e2c9de6ab17ea09524b28eafb1186debc78435386a3b6617cb4a0`.

### evaluation:627310

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `parseStoredAutomationRun`, `runs.push`, `runs.slice`, `runs.sort`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `29fc8c7220a9afa8eda38e1690238b725099ab7430f751c55f41e4c862a0977e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
