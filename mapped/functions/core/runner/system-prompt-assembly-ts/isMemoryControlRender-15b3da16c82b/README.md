# `isMemoryControlRender`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552649-552651](../../../../../../reference/runtime/sand-eval-runner.cjs#L552649-L552651) | `FunctionDeclaration` | não | `render2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552649-552651](../../../../../../reference/runtime/sand-eval-runner.cjs#L552649-L552651) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552649

Chamadas escritas diretamente neste corpo: `MEMORY_CONTROL_RENDER_PREFIXES.some`.

SHA-256 do trecho: `0a7dcdd97c7048b5b42d5682f8ef865c51917dea851214baefe6ad1b964f7d9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
