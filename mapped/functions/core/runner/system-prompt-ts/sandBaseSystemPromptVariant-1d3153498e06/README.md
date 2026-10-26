# `sandBaseSystemPromptVariant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533272-533280](../../../../../../reference/runtime/sand-eval-runner.cjs#L533272-L533280) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533272-533280](../../../../../../reference/runtime/sand-eval-runner.cjs#L533272-L533280) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533272

Chamadas escritas diretamente neste corpo: `BASE_SYSTEM_PROMPT_VARIANTS.get`, `BASE_SYSTEM_PROMPT_VARIANTS.set`, `buildSandBaseSystemPrompt`, `promptCacheKey`.

Alvos de atribuição ou incremento: `prompt`.

SHA-256 do trecho: `14e90307db41850685a242e8884aecb4d95dede07c9dd7ac1d6763a87e8e77e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
