# `createTeachRecordingService/quarantineQueueFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729153-729176](../../../../../../../reference/runtime/host-main.cjs#L729153-L729176) | `ArrowFunctionExpression` | sim | `{     connection,     entries   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729153-729176](../../../../../../../reference/runtime/host-main.cjs#L729153-L729176) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:729153

Chamadas escritas diretamente neste corpo: `.join`, `entries.flatMap`, `new SandTeachRecordingError`, `runShell`.

Alvos de lançamento explícito: `SandTeachRecordingError`.

SHA-256 do trecho: `bb67f86248eb416e3b7fbe9913315733ab304da13f3b141f63e3662aaa7695a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
