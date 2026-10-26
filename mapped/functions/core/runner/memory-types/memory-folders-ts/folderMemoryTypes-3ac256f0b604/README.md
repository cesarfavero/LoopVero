# `folderMemoryTypes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-folders.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754674-754676](../../../../../../../reference/runtime/host-main.cjs#L754674-L754676) | `FunctionDeclaration` | não | `memoryTypes` |
| [evaluation:537641-537643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537641-L537643) | `FunctionDeclaration` | não | `memoryTypes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754674-754676](../../../../../../../reference/runtime/host-main.cjs#L754674-L754676) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537641-537643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537641-L537643) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754674

Chamadas escritas diretamente neste corpo: `memoryTypes.filter`.

SHA-256 do trecho: `c2ff2345dbb5a0ff030b5f9c80d39286f4ff39c09a9ab1cfd4d1d04f59e69e97`.

### evaluation:537641

Chamadas escritas diretamente neste corpo: `memoryTypes.filter`.

SHA-256 do trecho: `c2ff2345dbb5a0ff030b5f9c80d39286f4ff39c09a9ab1cfd4d1d04f59e69e97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
