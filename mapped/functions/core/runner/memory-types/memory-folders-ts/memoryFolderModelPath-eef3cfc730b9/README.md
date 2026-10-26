# `memoryFolderModelPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-folders.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754680-754683](../../../../../../../reference/runtime/host-main.cjs#L754680-L754683) | `FunctionDeclaration` | não | `owner, filePath` |
| [evaluation:537647-537650](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537647-L537650) | `FunctionDeclaration` | não | `owner, filePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754680-754683](../../../../../../../reference/runtime/host-main.cjs#L754680-L754683) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537647-537650](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537647-L537650) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:754680

Chamadas escritas diretamente neste corpo: `filePath.endsWith`, `filePath.slice`.

SHA-256 do trecho: `7bc3f263c7bba926d36ea351333fb8efc65191a0849655c61a10da0557d58d02`.

### evaluation:537647

Chamadas escritas diretamente neste corpo: `filePath.endsWith`, `filePath.slice`.

SHA-256 do trecho: `7bc3f263c7bba926d36ea351333fb8efc65191a0849655c61a10da0557d58d02`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
