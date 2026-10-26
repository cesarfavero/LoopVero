# `dropSkillBackedSections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533119-533132](../../../../../../reference/runtime/sand-eval-runner.cjs#L533119-L533132) | `FunctionDeclaration` | não | `sections, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533119-533132](../../../../../../reference/runtime/sand-eval-runner.cjs#L533119-L533132) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:533119

Chamadas escritas diretamente neste corpo: `sections.flatMap`.

SHA-256 do trecho: `7b7486cb72b39a43bc33d6a7cebc1aae6414c49505a4d6960f018f5552fb281a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
