# `createTeachRecordingService/completedSessionJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728952-728967](../../../../../../../reference/runtime/host-main.cjs#L728952-L728967) | `ArrowFunctionExpression` | não | `{     recording,     endedAtMs,     signature   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728952-728967](../../../../../../../reference/runtime/host-main.cjs#L728952-L728967) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:728952 usa retorno implícito de arrow function.

### host:728952

Chamadas escritas diretamente neste corpo: `.toISOString`, `JSON.stringify`, `learningPromptNonce`, `new Date`.

SHA-256 do trecho: `af41bb08aa4fff043c1485ab40e1f81feffecf30720a565b1f4182f67f91c061`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
