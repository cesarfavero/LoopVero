# `scrollAmountSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776901-776903](../../../../../../../reference/runtime/host-main.cjs#L776901-L776903) | `FunctionDeclaration` | não | `(nenhum)` |
| [evaluation:576546-576548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576546-L576548) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776901-776903](../../../../../../../reference/runtime/host-main.cjs#L776901-L776903) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576546-576548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576546-L576548) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776901

Chamadas escritas diretamente neste corpo: `.int`, `.refine`, `external_exports2.number`.

SHA-256 do trecho: `85bd5eec37bfc351b679ea9cfd95cb56e9fa68673ea93509992733f431b32a55`.

### evaluation:576546

Chamadas escritas diretamente neste corpo: `.int`, `.refine`, `external_exports3.number`.

SHA-256 do trecho: `a91d9915c263f4210e867c8e2e3bfe5b6e64f8e45a10168e9bc5a5d54b8ecdab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
