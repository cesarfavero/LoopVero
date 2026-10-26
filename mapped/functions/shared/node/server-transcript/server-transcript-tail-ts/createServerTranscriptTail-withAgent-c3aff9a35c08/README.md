# `createServerTranscriptTail/withAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713022-713037](../../../../../../../reference/runtime/host-main.cjs#L713022-L713037) | `ArrowFunctionExpression` | sim | `lockKey, work` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713022-713037](../../../../../../../reference/runtime/host-main.cjs#L713022-L713037) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:713022

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `locks.delete`, `locks.get`, `locks.set`, `new Promise`, `release`, `work`.

SHA-256 do trecho: `745d9c784214cdcf59e52765aedd5e156d773c0e8973e049c5a4e50ec2db2a78`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
