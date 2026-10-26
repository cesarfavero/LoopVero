# `createTeachRecordingService/armCap`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729056-729072](../../../../../../../reference/runtime/host-main.cjs#L729056-L729072) | `ArrowFunctionExpression` | não | `recording` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729056-729072](../../../../../../../reference/runtime/host-main.cjs#L729056-L729072) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:729056

Chamadas escritas diretamente neste corpo: `capWake`, `deps.capPolicy.wrap`.

Alvos de atribuição ou incremento: `capWake`.

SHA-256 do trecho: `2c7a405d4b52ab8cadc0f6ffb8ce032943a2de5f4c49856b65d9ede4ac360166`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
