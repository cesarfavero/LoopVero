# `backendUrlOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-token.ts` · [README do módulo](../../../../../modules/shared/node/cursor-token-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175744-175746](../../../../../../reference/runtime/host-main.cjs#L175744-L175746) | `FunctionDeclaration` | não | `sandBackendUrl, cursorApiBaseUrl` |
| [evaluation:511719-511721](../../../../../../reference/runtime/sand-eval-runner.cjs#L511719-L511721) | `FunctionDeclaration` | não | `sandBackendUrl, cursorApiBaseUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175744-175746](../../../../../../reference/runtime/host-main.cjs#L175744-L175746) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511719-511721](../../../../../../reference/runtime/sand-eval-runner.cjs#L511719-L511721) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175744

Chamadas escritas diretamente neste corpo: `.toString`, `new URL`.

SHA-256 do trecho: `f06fa0c208904493764194edcc98a401e46ce358fbe0f3b6e8be0aba6116d58e`.

### evaluation:511719

Chamadas escritas diretamente neste corpo: `.toString`, `new URL`.

SHA-256 do trecho: `f06fa0c208904493764194edcc98a401e46ce358fbe0f3b6e8be0aba6116d58e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
