# `toHexId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-gc.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22189-22191](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22189-L22191) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22189-22191](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22189-L22191) | 0 | 0 | 0 | 1 | 0 | 0 |

### state-worker:22189

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`.

SHA-256 do trecho: `2dc1b48009e8332fbe00b4b031fdb3f6568ae9c1edb98a1f31876044aba5ecbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
