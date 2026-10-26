# `createTeachRecordingService/sessionJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728934-728951](../../../../../../../reference/runtime/host-main.cjs#L728934-L728951) | `ArrowFunctionExpression` | não | `{     recording,     end   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728934-728951](../../../../../../../reference/runtime/host-main.cjs#L728934-L728951) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:728934 usa retorno implícito de arrow function.

### host:728934

Chamadas escritas diretamente neste corpo: `.replace`, `.toISOString`, `JSON.stringify`, `new Date`.

SHA-256 do trecho: `4a751e96386a8366bb1ae9a02dfd58c23b4e0ece9d550b9b776d17ee94a03dcf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
