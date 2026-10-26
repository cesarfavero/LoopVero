# `blobIdsIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-gc.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22202-22218](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22202-L22218) | `FunctionDeclaration` | não | `rawValue` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22202-22218](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22202-L22218) | 5 | 2 | 0 | 2 | 0 | 0 |

### state-worker:22202

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Object.values`.

SHA-256 do trecho: `6f6f2d21679dbb65b4c969122d4772c17dd6fb27601d5e356d0d3b4cbe4357d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
