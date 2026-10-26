# `createOrbitDaemonSessionController/withPublishedSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705676-705717](../../../../../../../reference/runtime/host-main.cjs#L705676-L705717) | `FunctionDeclaration` | sim | `call, callerSignal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705676-705717](../../../../../../../reference/runtime/host-main.cjs#L705676-L705717) | 8 | 0 | 1 | 1 | 5 | 1 |

### host:705676

Chamadas escritas diretamente neste corpo: `AbortSignal.any`, `ConnectError.from`, `beginRetirement`, `call`, `isOperationProtocolMismatch`, `new ConnectError`, `operationUnavailable`, `requestReconciliation`.

Alvos de atribuição ou incremento: `result`, `retirement`.

Alvos de lançamento explícito: `ConnectError`, `error64`, `operationUnavailable`.

SHA-256 do trecho: `ec8acee11ca357da8b348533062a53bd7aa1d556be3d5b0420fbe9914c6d1f86`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
