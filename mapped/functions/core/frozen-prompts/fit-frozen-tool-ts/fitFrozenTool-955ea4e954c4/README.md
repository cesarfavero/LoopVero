# `fitFrozenTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/fit-frozen-tool.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/fit-frozen-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553875-553884](../../../../../../reference/runtime/sand-eval-runner.cjs#L553875-L553884) | `FunctionDeclaration` | não | `frozen, live, dates` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553875-553884](../../../../../../reference/runtime/sand-eval-runner.cjs#L553875-L553884) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553875

Chamadas escritas diretamente neste corpo: `narrowToAcceptedParameters`, `withRowDate`.

SHA-256 do trecho: `dc3f5fd753d9ba9174cae3dc1ff765e7e98ca9720053513764a074ea72d06d7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
