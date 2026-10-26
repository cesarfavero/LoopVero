# `memoryFolderFactsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769526-769529](../../../../../../reference/runtime/host-main.cjs#L769526-L769529) | `FunctionDeclaration` | não | `deps` |
| [evaluation:565195-565198](../../../../../../reference/runtime/sand-eval-runner.cjs#L565195-L565198) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769526-769529](../../../../../../reference/runtime/host-main.cjs#L769526-L769529) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565195-565198](../../../../../../reference/runtime/sand-eval-runner.cjs#L565195-L565198) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:769526

Chamadas escritas diretamente neste corpo: `deps.memoryFolders`, `folders.list`, `memoryFolderFacts`.

SHA-256 do trecho: `a69a4206b323444b75b7c9f2315170e174bcb9fc97b6d36aaba4add90a5b9563`.

### evaluation:565195

Chamadas escritas diretamente neste corpo: `deps.memoryFolders`, `folders.list`, `memoryFolderFacts`.

SHA-256 do trecho: `a69a4206b323444b75b7c9f2315170e174bcb9fc97b6d36aaba4add90a5b9563`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
