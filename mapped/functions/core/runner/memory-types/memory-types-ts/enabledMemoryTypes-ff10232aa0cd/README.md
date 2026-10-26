# `enabledMemoryTypes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-types.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-types-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:753946-753948](../../../../../../../reference/runtime/host-main.cjs#L753946-L753948) | `FunctionDeclaration` | não | `names3 = DEFAULT_ENABLED_MEMORY_TYPE_NAMES` |
| [evaluation:535116-535118](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535116-L535118) | `FunctionDeclaration` | não | `names3 = DEFAULT_ENABLED_MEMORY_TYPE_NAMES` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:753946-753948](../../../../../../../reference/runtime/host-main.cjs#L753946-L753948) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535116-535118](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535116-L535118) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:753946

Chamadas escritas diretamente neste corpo: `GROK_BOT_MEMORY_TYPES.filter`.

SHA-256 do trecho: `e284c3330bb4a2db598190dbe8a6e2750828b5e587e90b8b70537508d20be4ee`.

### evaluation:535116

Chamadas escritas diretamente neste corpo: `GROK_BOT_MEMORY_TYPES.filter`.

SHA-256 do trecho: `e284c3330bb4a2db598190dbe8a6e2750828b5e587e90b8b70537508d20be4ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
