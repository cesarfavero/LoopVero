# `createSystemPromptAssembly`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552679-553779](../../../../../../reference/runtime/sand-eval-runner.cjs#L552679-L553779) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552679-553779](../../../../../../reference/runtime/sand-eval-runner.cjs#L552679-L553779) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552679

Chamadas escritas diretamente neste corpo: `resolveSandTurnToolDecisions`, `toolDecisions.offers`.

SHA-256 do trecho: `1346844e3c9f9e02f0fd769cd4fda76fe3ab35d73a06473457bc02d961524b62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
