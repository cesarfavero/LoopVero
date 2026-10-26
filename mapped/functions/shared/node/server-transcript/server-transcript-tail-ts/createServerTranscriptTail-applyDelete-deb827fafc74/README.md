# `createServerTranscriptTail/applyDelete`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713357-713376](../../../../../../../reference/runtime/host-main.cjs#L713357-L713376) | `ArrowFunctionExpression` | não | `state, row` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713357-713376](../../../../../../../reference/runtime/host-main.cjs#L713357-L713376) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:713357

Chamadas escritas diretamente neste corpo: `Number`, `emit`, `nextStamp`, `settlePendingBody`, `state.rows.get`, `state.rows.set`.

SHA-256 do trecho: `47ea67f8f42e9c807078a422e76902f28e67d0f5962b89650050dd4d2e811560`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
