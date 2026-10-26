# `renderSandPromptSections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533097-533105](../../../../../../reference/runtime/sand-eval-runner.cjs#L533097-L533105) | `FunctionDeclaration` | não | `sections, prefixSections = []` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533097-533105](../../../../../../reference/runtime/sand-eval-runner.cjs#L533097-L533105) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533097

Chamadas escritas diretamente neste corpo: `lines2.join`, `renderedSections.forEach`.

SHA-256 do trecho: `51bae40f868ed8513d05e449655651297c8e9b31c1f91b3e3018b8073382d531`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
