# `diffPromptPrefixTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546325-546337](../../../../../../reference/runtime/sand-eval-runner.cjs#L546325-L546337) | `FunctionDeclaration` | não | `previous, current2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546325-546337](../../../../../../reference/runtime/sand-eval-runner.cjs#L546325-L546337) | 6 | 0 | 0 | 2 | 0 | 0 |

### evaluation:546325

Chamadas escritas diretamente neste corpo: `changed.push`.

SHA-256 do trecho: `56be0ffcacd7feb4f96ab5e968b1e05393cf6f7f9da840738a47422c5583ccb3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
