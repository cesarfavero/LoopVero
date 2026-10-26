# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/resume-ownership/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708826-708942](../../../../../../../reference/runtime/host-main.cjs#L708826-L708942) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708826-708942](../../../../../../../reference/runtime/host-main.cjs#L708826-L708942) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:708826

Chamadas escritas diretamente neste corpo: `context2.onStop`, `createRetryPolicy`, `createSandCursorBackendClient`, `new AppliedMigrationBarrier`, `new ResumeOwnershipService`, `turnExecution.setLocalWorkAllowed`.

SHA-256 do trecho: `285781aa99fdcf9e38c32bdcafd15d584693fdb32714ad6a8e3eafa5acb8ae73`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
