# `resolveLocalToolPermissionAsk`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `host/extensions/local-tool-permission/local-tool-permission-resolution.ts` · [README do módulo](../../../../../../modules/host/extensions/local-tool-permission/local-tool-permission-resolution-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682202-682220](../../../../../../../reference/runtime/host-main.cjs#L682202-L682220) | `FunctionDeclaration` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682202-682220](../../../../../../../reference/runtime/host-main.cjs#L682202-L682220) | 3 | 0 | 1 | 0 | 2 | 0 |

### host:682202

Chamadas escritas diretamente neste corpo: `.catch`, `deps.onStrandedRetirement`, `deps.transcript.widgetResponses.settleStaleLocalToolPermissionCard`, `isSandLocalToolPermissionResolution`, `new SandLocalToolPermissionResolutionError`.

Alvos de lançamento explícito: `SandLocalToolPermissionResolutionError`.

SHA-256 do trecho: `0ab77efbfca303db42120b7b943eed608dc8790660c86ede7f332f6a2479d787`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
