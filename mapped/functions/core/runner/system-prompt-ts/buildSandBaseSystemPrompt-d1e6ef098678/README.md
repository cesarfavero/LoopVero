# `buildSandBaseSystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533133-533136](../../../../../../reference/runtime/sand-eval-runner.cjs#L533133-L533136) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533133-533136](../../../../../../reference/runtime/sand-eval-runner.cjs#L533133-L533136) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533133

Chamadas escritas diretamente neste corpo: `buildSandBaseSystemPromptSections`, `dropSkillBackedSections`, `renderSandPromptSections`.

SHA-256 do trecho: `b5a25c6e6970a33bed2ae83ce3d3c3dfd9291ba33f7eb57ec5a0500c5f3a1d7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
