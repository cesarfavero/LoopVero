# `createTeachRecordingService/discardRecording`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729002-729029](../../../../../../../reference/runtime/host-main.cjs#L729002-L729029) | `ArrowFunctionExpression` | não | `{     connection,     recording,     verifyCmdline   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729002-729029](../../../../../../../reference/runtime/host-main.cjs#L729002-L729029) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:729002 usa retorno implícito de arrow function.

### host:729002

Chamadas escritas diretamente neste corpo: `.join`, `queueFile`, `queueScope`, `runShell`.

SHA-256 do trecho: `ad96e32dd9a90932350bce6bdbdac471b88dc52ea4afed867d353fea4744aee6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
