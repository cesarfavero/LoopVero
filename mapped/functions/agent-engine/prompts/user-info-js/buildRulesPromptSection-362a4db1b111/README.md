# `buildRulesPromptSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640374-640404](../../../../../../reference/runtime/host-main.cjs#L640374-L640404) | `FunctionDeclaration` | não | `props, options2` |
| [evaluation:430988-431018](../../../../../../reference/runtime/sand-eval-runner.cjs#L430988-L431018) | `FunctionDeclaration` | não | `props, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640374-640404](../../../../../../reference/runtime/host-main.cjs#L640374-L640404) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:430988-431018](../../../../../../reference/runtime/sand-eval-runner.cjs#L430988-L431018) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:640374

Chamadas escritas diretamente neste corpo: `agentRequestableRules.filter`, `buildAntiAskQuestionUserRule`, `categorizeCursorRulesForDisplay`, `getComposer2CustomUserRulesForModel`, `getComposerGitUserRules`, `jsx`, `shouldInjectComposerGitUserRules`.

SHA-256 do trecho: `0497a65321a6862bd506166f982d16ac2301e3358af4010b96713c63b94bcd79`.

### evaluation:430988

Chamadas escritas diretamente neste corpo: `agentRequestableRules.filter`, `buildAntiAskQuestionUserRule`, `categorizeCursorRulesForDisplay`, `getComposer2CustomUserRulesForModel`, `getComposerGitUserRules`, `jsx`, `shouldInjectComposerGitUserRules`.

SHA-256 do trecho: `0497a65321a6862bd506166f982d16ac2301e3358af4010b96713c63b94bcd79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
