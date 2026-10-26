# `memory.write`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762956-762973](../../../../../../../reference/runtime/host-main.cjs#L762956-L762973) | `ArrowFunctionExpression` | sim | `args, deps, need` |
| [evaluation:555566-555583](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555566-L555583) | `ArrowFunctionExpression` | sim | `args, deps, need` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762956-762973](../../../../../../../reference/runtime/host-main.cjs#L762956-L762973) | 3 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:555566-555583](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555566-L555583) | 3 | 0 | 2 | 2 | 0 | 0 |

### host:762956

Chamadas escritas diretamente neste corpo: `deps.state.writeMemory`, `memoryScope`, `need`.

SHA-256 do trecho: `4934e7767ca9d64eae24210e64ad1a198ba619d30f8b30102ae231875b89b8ee`.

### evaluation:555566

Chamadas escritas diretamente neste corpo: `deps.state.writeMemory`, `memoryScope`, `need`.

SHA-256 do trecho: `4934e7767ca9d64eae24210e64ad1a198ba619d30f8b30102ae231875b89b8ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
