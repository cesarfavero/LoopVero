# `createTeachRecordingService/stop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729341-729499](../../../../../../../reference/runtime/host-main.cjs#L729341-L729499) | `ArrowFunctionExpression` | sim | `{     agentId,     save,     trackCompletion   }` |
| [host:729546-729546](../../../../../../../reference/runtime/host-main.cjs#L729546-L729546) | `ArrowFunctionExpression` | não | `{ agentId, save }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729341-729499](../../../../../../../reference/runtime/host-main.cjs#L729341-L729499) | 8 | 0 | 2 | 3 | 1 | 0 |
| [host:729546-729546](../../../../../../../reference/runtime/host-main.cjs#L729546-L729546) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:729546 usa retorno implícito de arrow function.

### host:729341

Chamadas escritas diretamente neste corpo: `Date.now`, `armCap`, `new SandTeachRecordingError`, `statusOf2`.

Alvos de atribuição ou incremento: `finalizing`, `finalizing.intent`, `stopInFlight`.

Alvos de lançamento explícito: `SandTeachRecordingError`.

SHA-256 do trecho: `e06bbebe765ec9098f21dc618116ee62a667a30266365f190267806666b6edda`.

### host:729546

Chamadas escritas diretamente neste corpo: `stop`.

SHA-256 do trecho: `6ed9ffc0261ce1329eae8591452281f7b1af01c1399216a0671fa923531d0e3d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
