# `createTeachRecordingService/markPromptDelivered`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729077-729096](../../../../../../../reference/runtime/host-main.cjs#L729077-L729096) | `ArrowFunctionExpression` | sim | `{     connection,     pending   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729077-729096](../../../../../../../reference/runtime/host-main.cjs#L729077-L729096) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:729077

Chamadas escritas diretamente neste corpo: `.join`, `new SandTeachRecordingError`, `queueScope`, `runShell`.

Alvos de lançamento explícito: `SandTeachRecordingError`.

SHA-256 do trecho: `4379fe3133b128413df9c2a380a86111ab037493b198ce42c9f8bcfb6db9a0cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
