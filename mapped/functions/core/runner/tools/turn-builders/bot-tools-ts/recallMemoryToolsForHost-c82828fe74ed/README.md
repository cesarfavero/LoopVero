# `recallMemoryToolsForHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/bot-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/bot-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772061-772066](../../../../../../../../reference/runtime/host-main.cjs#L772061-L772066) | `FunctionDeclaration` | não | `host` |
| [evaluation:571294-571299](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571294-L571299) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772061-772066](../../../../../../../../reference/runtime/host-main.cjs#L772061-L772066) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:571294-571299](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571294-L571299) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:772061

Chamadas escritas diretamente neste corpo: `createLookupRecallMemoryTool`, `recallMemoryTools`, `selectStateToolStores`.

SHA-256 do trecho: `d9ee436d109bb6d8bb4f51d68a105ae4bb0309a10e14218c0db687116e679500`.

### evaluation:571294

Chamadas escritas diretamente neste corpo: `createLookupRecallMemoryTool`, `recallMemoryTools`, `selectStateToolStores`.

SHA-256 do trecho: `d9ee436d109bb6d8bb4f51d68a105ae4bb0309a10e14218c0db687116e679500`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
