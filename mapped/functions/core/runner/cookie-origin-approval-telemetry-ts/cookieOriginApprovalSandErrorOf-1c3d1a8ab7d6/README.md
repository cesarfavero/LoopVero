# `cookieOriginApprovalSandErrorOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/cookie-origin-approval-telemetry.ts` · [README do módulo](../../../../../modules/core/runner/cookie-origin-approval-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:456081-456118](../../../../../../reference/runtime/host-main.cjs#L456081-L456118) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456081-456118](../../../../../../reference/runtime/host-main.cjs#L456081-L456118) | 17 | 0 | 0 | 13 | 0 | 0 |

### host:456081

Chamadas escritas diretamente neste corpo: `SandError.cookieApprovalAborted`, `SandError.cookieApprovalCollectFailed`, `SandError.cookieApprovalEnumerateFailed`, `SandError.cookieApprovalExpired`, `SandError.cookieApprovalMachineStale`, `SandError.cookieApprovalNoMachine`, `SandError.cookieApprovalNoMatch`, `SandError.cookieApprovalNoWindow`, `SandError.cookieApprovalUnavailable`, `SandError.cookieImportGateOff`, `SandError.cookieInjectFailed`, `brandedErrorClass`.

SHA-256 do trecho: `baa95cd2cdad6b71441b7271ba206cce0f64b483615d9c5cdffe4662d6ec4d7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
