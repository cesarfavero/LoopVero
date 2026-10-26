# `createTeachRecordingService/recoverFailedStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729049-729055](../../../../../../../reference/runtime/host-main.cjs#L729049-L729055) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729049-729055](../../../../../../../reference/runtime/host-main.cjs#L729049-L729055) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:729049

Chamadas escritas diretamente neste corpo: `cleanupFailedStart`, `deps.box.ensureReady`.

Alvos de atribuição ou incremento: `failedStart`.

SHA-256 do trecho: `73d4ac4905342aa4fb2f76d48c7bad895dce8cd88f6800017f371ecc90fbd60c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
