# `userInfoHasExpectedCustomUserRules`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640341-640363](../../../../../../reference/runtime/host-main.cjs#L640341-L640363) | `FunctionDeclaration` | não | `content, modelInfo, featureFlags, options2` |
| [evaluation:430955-430977](../../../../../../reference/runtime/sand-eval-runner.cjs#L430955-L430977) | `FunctionDeclaration` | não | `content, modelInfo, featureFlags, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640341-640363](../../../../../../reference/runtime/host-main.cjs#L640341-L640363) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430955-430977](../../../../../../reference/runtime/sand-eval-runner.cjs#L430955-L430977) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640341

Chamadas escritas diretamente neste corpo: `getComposer2CustomUserRulesForModel`, `rules.map`, `shouldInjectUiBrowserVerificationPrompt`, `stripWhitespace`, `stripped.includes`, `strippedRules.every`, `strippedRules.some`.

SHA-256 do trecho: `c791b34f4be8f014ef4c0f2242395613e32acf2f844201330054cc3185418359`.

### evaluation:430955

Chamadas escritas diretamente neste corpo: `getComposer2CustomUserRulesForModel`, `rules.map`, `shouldInjectUiBrowserVerificationPrompt`, `stripWhitespace`, `stripped.includes`, `strippedRules.every`, `strippedRules.some`.

SHA-256 do trecho: `c791b34f4be8f014ef4c0f2242395613e32acf2f844201330054cc3185418359`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
