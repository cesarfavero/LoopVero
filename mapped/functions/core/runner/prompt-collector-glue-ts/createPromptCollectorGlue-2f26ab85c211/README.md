# `createPromptCollectorGlue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-collector-glue.ts` · [README do módulo](../../../../../modules/core/runner/prompt-collector-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533688-534034](../../../../../../reference/runtime/sand-eval-runner.cjs#L533688-L534034) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533688-534034](../../../../../../reference/runtime/sand-eval-runner.cjs#L533688-L534034) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533688

Chamadas escritas diretamente neste corpo: `createImageGenerationConcurrencyLimiter`, `createSandAgentToolsUploader`.

SHA-256 do trecho: `358df2836ed713c7a374a9d1aa8335622570d1aec1ebb7f3342e79cf585a19b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
