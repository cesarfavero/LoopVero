# `diffPromptPrefixDynamicTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546294-546302](../../../../../../reference/runtime/sand-eval-runner.cjs#L546294-L546302) | `FunctionDeclaration` | não | `previous, current2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546294-546302](../../../../../../reference/runtime/sand-eval-runner.cjs#L546294-L546302) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:546294

Chamadas escritas diretamente neste corpo: `.map`, `current2.dynamicTools.filter`, `new Set`, `previous.dynamicTools.filter`.

SHA-256 do trecho: `abab59a39be937ff1968d1b5f550a70a21960b5b75b061dd5d88bf945b1aa799`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
