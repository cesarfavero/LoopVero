# `createTeachRecordingService/reportStartFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729311-729318](../../../../../../../reference/runtime/host-main.cjs#L729311-L729318) | `ArrowFunctionExpression` | não | `{ agentId, entryPoint }, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729311-729318](../../../../../../../reference/runtime/host-main.cjs#L729311-L729318) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:729311

Chamadas escritas diretamente neste corpo: `deps.box.getAgentWindowIndex`, `deps.reportStartFailed`, `startFailureKind`.

SHA-256 do trecho: `730b3127de7d5ef187fcdf2235eebd1c55eeb83137350cbc10fd35d9b43623ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
