# `createLookupRecallMemoryTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/tools/recall-memory-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769841-769861](../../../../../../../reference/runtime/host-main.cjs#L769841-L769861) | `FunctionDeclaration` | não | `lookup3` |
| [evaluation:565510-565530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565510-L565530) | `FunctionDeclaration` | não | `lookup3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769841-769861](../../../../../../../reference/runtime/host-main.cjs#L769841-L769861) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565510-565530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565510-L565530) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769841

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`.

SHA-256 do trecho: `dde97fa248bc0167a26d34b5dd6c18e5325f2d55597a14db0e2b1a8c151e6c13`.

### evaluation:565510

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`.

SHA-256 do trecho: `dde97fa248bc0167a26d34b5dd6c18e5325f2d55597a14db0e2b1a8c151e6c13`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
