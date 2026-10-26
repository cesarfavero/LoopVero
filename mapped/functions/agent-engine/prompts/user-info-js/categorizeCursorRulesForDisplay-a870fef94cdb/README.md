# `categorizeCursorRulesForDisplay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640643-640650](../../../../../../reference/runtime/host-main.cjs#L640643-L640650) | `FunctionDeclaration` | não | `cursorRules, workspacePaths, displayOptions, featureFlags, metricsCtx, omitSkills` |
| [evaluation:431257-431264](../../../../../../reference/runtime/sand-eval-runner.cjs#L431257-L431264) | `FunctionDeclaration` | não | `cursorRules, workspacePaths, displayOptions, featureFlags, metricsCtx, omitSkills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640643-640650](../../../../../../reference/runtime/host-main.cjs#L640643-L640650) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431257-431264](../../../../../../reference/runtime/sand-eval-runner.cjs#L431257-L431264) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640643

Chamadas escritas diretamente neste corpo: `categorizeCursorRules`.

SHA-256 do trecho: `8fde553beeefd08efc8760e9044918b1ff3327bea779d0e913160b6cd680a3d6`.

### evaluation:431257

Chamadas escritas diretamente neste corpo: `categorizeCursorRules`.

SHA-256 do trecho: `8fde553beeefd08efc8760e9044918b1ff3327bea779d0e913160b6cd680a3d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
