# `renderAutomationRuntimeStatusReminder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/prompt-sections/automations-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528562-528579](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528562-L528579) | `FunctionDeclaration` | não | `automations, timeZone, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528562-528579](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528562-L528579) | 5 | 1 | 0 | 2 | 0 | 0 |

### evaluation:528562

Chamadas escritas diretamente neste corpo: `automation.runs.filter`, `automationDefinitionLine`, `formatTimestamp2`, `lines2.join`, `lines2.push`, `summarizeLastRun`, `systemReminder`.

SHA-256 do trecho: `ab26357803a4d8ad3b4f246c43e913e1de8fadcfbd56f679d1ccb91b17610e6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
