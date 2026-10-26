# `reminderFor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/plugin-guide-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585694-585705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585694-L585705) | `FunctionDeclaration` | não | `deps, args, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585694-585705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585694-L585705) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:585694

Chamadas escritas diretamente neste corpo: `deps.loadableSkills`, `deps.messages`, `deps.skills`, `guideSkill`, `hasOpenedGuide`, `installedServerGuide`, `pluginGuideReminder`.

SHA-256 do trecho: `3e811c08d965dc12a2e99b1228af485cd9a6430eebcf8db4b6983ff256c1131e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
