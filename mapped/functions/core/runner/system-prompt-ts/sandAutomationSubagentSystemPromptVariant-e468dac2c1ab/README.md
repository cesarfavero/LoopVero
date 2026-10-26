# `sandAutomationSubagentSystemPromptVariant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533262-533270](../../../../../../reference/runtime/sand-eval-runner.cjs#L533262-L533270) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533262-533270](../../../../../../reference/runtime/sand-eval-runner.cjs#L533262-L533270) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533262

Chamadas escritas diretamente neste corpo: `AUTOMATION_SUBAGENT_SYSTEM_PROMPT_VARIANTS.get`, `AUTOMATION_SUBAGENT_SYSTEM_PROMPT_VARIANTS.set`, `buildSandAutomationSubagentSystemPrompt`, `promptCacheKey`.

Alvos de atribuição ou incremento: `prompt`.

SHA-256 do trecho: `4f7dba7aa81c083472ee20abbcac6a1c3699f596ca854c81acae5f8aec16905b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
