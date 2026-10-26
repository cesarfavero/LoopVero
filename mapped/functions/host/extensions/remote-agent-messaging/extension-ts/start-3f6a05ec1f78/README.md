# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/remote-agent-messaging/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/remote-agent-messaging/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708445-708466](../../../../../../../reference/runtime/host-main.cjs#L708445-L708466) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708445-708466](../../../../../../../reference/runtime/host-main.cjs#L708445-L708466) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:708445

Chamadas escritas diretamente neste corpo: `createDeadlinePolicy`, `createSandCursorBackendClient`, `createTemporalMemberTurns`.

SHA-256 do trecho: `cd197684c8012bbfd30a9a4282ec39366b85a5ca8ded2425d5c9029f2418f69a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
