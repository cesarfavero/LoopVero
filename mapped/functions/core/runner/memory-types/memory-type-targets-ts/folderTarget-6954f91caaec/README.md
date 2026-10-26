# `folderTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-type-targets.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-type-targets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771561-771592](../../../../../../../reference/runtime/host-main.cjs#L771561-L771592) | `FunctionDeclaration` | não | `{   memoryType,   audience,   story,   meta: meta3,   teamBot }` |
| [evaluation:570794-570825](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570794-L570825) | `FunctionDeclaration` | não | `{   memoryType,   audience,   story,   meta: meta3,   teamBot }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771561-771592](../../../../../../../reference/runtime/host-main.cjs#L771561-L771592) | 6 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:570794-570825](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570794-L570825) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:771561

Chamadas escritas diretamente neste corpo: `memoryTypeFilePath`, `refused3`, `target`.

SHA-256 do trecho: `241699635c5697410efb5bc25a179a37103f9d916e76c8d0ed24fd04d6c1a030`.

### evaluation:570794

Chamadas escritas diretamente neste corpo: `memoryTypeFilePath`, `refused3`, `target`.

SHA-256 do trecho: `241699635c5697410efb5bc25a179a37103f9d916e76c8d0ed24fd04d6c1a030`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
