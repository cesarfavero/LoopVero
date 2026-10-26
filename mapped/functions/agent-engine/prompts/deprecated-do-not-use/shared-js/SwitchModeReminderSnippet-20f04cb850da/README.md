# `SwitchModeReminderSnippet`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/deprecated-do-not-use/shared.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/deprecated-do-not-use/shared-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636255-636260](../../../../../../../reference/runtime/host-main.cjs#L636255-L636260) | `FunctionDeclaration` | não | `{ currentMode, targetModes, fromModes }` |
| [evaluation:424311-424316](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424311-L424316) | `FunctionDeclaration` | não | `{ currentMode, targetModes, fromModes }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636255-636260](../../../../../../../reference/runtime/host-main.cjs#L636255-L636260) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424311-424316](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424311-L424316) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636255

Chamadas escritas diretamente neste corpo: `buildCurrentModeStatement`.

SHA-256 do trecho: `9ced3b158c79ee82dd09bba6a979d66f0f2afdf4293f6ace816a417a7497cf91`.

### evaluation:424311

Chamadas escritas diretamente neste corpo: `buildCurrentModeStatement`.

SHA-256 do trecho: `9ced3b158c79ee82dd09bba6a979d66f0f2afdf4293f6ace816a417a7497cf91`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
