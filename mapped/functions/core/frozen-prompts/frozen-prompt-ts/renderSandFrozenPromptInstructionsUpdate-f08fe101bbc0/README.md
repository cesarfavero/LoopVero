# `renderSandFrozenPromptInstructionsUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537478-537490](../../../../../../reference/runtime/sand-eval-runner.cjs#L537478-L537490) | `FunctionDeclaration` | não | `frozenPrompt, rendered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537478-537490](../../../../../../reference/runtime/sand-eval-runner.cjs#L537478-L537490) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:537478

Chamadas escritas diretamente neste corpo: `.join`, `frozen.join`, `frozenPrompt.promptSections.flatMap`.

SHA-256 do trecho: `93e5314261779a37ace5e4381b501193ee19355edaf1545a91ced25329a72e2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
