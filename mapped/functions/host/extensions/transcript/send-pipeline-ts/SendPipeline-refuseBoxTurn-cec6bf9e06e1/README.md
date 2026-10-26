# `SendPipeline.refuseBoxTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/send-pipeline.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740189-740192](../../../../../../../reference/runtime/host-main.cjs#L740189-L740192) | `method` | não | `conversationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740189-740192](../../../../../../../reference/runtime/host-main.cjs#L740189-L740192) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:740189

Chamadas escritas diretamente neste corpo: `new SandBoxHarnessRetiredError`, `this.tm.boxHarnessRefusals.reportBlocked`.

Alvos de lançamento explícito: `SandBoxHarnessRetiredError`.

SHA-256 do trecho: `b080d47e57832399de61765a6d2b4d67bb17176cc15b09c423e56a0d8005c287`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
