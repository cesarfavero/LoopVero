# `createSystemPromptAssembly/memoryFactsPin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552929-552935](../../../../../../reference/runtime/sand-eval-runner.cjs#L552929-L552935) | `FunctionDeclaration` | não | `pin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552929-552935](../../../../../../reference/runtime/sand-eval-runner.cjs#L552929-L552935) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:552929

Chamadas escritas diretamente neste corpo: `USER_MEMORY_FACT_MARKERS.some`, `deps.userMemory`, `isMemoryControlRender`.

SHA-256 do trecho: `3291c2b72a8c4a2c60fab37f81fc783b02966bc573855a6588599c5ceff4244b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
