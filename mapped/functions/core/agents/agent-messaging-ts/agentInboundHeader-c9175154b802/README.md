# `agentInboundHeader`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-messaging.ts` · [README do módulo](../../../../../modules/core/agents/agent-messaging-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:479544-479578](../../../../../../reference/runtime/sand-eval-runner.cjs#L479544-L479578) | `FunctionDeclaration` | não | `line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479544-479578](../../../../../../reference/runtime/sand-eval-runner.cjs#L479544-L479578) | 6 | 0 | 0 | 6 | 0 | 0 |

### evaluation:479544

Chamadas escritas diretamente neste corpo: `.startsWith`, `/^(.*) \(id: ([^)]*)\)\.$/.exec`, `/^(.*?) \(id: ([^)]*)\), /.exec`, `/^\d+/.exec`, `batchClosingLine`, `inboxClosingLine`, `legacyBatchClosingLine`, `legacyInboxClosingLine`, `legacyWakeClosingLine`, `line.slice`, `line.startsWith`, `rest.slice`, `rest.startsWith`, `slackCallerReplyWakeClosingLine`, `wakeClosingLine`.

SHA-256 do trecho: `8d8dd479f9fecb8d92dd7728b24330f45bfdd1255320d54a467e614fabde4b58`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
