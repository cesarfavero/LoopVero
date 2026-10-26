# `buildSandDraftSendRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755940-755960](../../../../../../reference/runtime/host-main.cjs#L755940-L755960) | `FunctionDeclaration` | não | `args` |
| [evaluation:541815-541835](../../../../../../reference/runtime/sand-eval-runner.cjs#L541815-L541835) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755940-755960](../../../../../../reference/runtime/host-main.cjs#L755940-L755960) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541815-541835](../../../../../../reference/runtime/sand-eval-runner.cjs#L541815-L541835) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755940

Chamadas escritas diretamente neste corpo: `JSON.parse`, `JSON.stringify`, `Struct.fromJson`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewedDestination`.

SHA-256 do trecho: `fda3091542ee81c4f089de4a11c31f4b8b7f35e94eb2d4b62ffcec3d267d9f55`.

### evaluation:541815

Chamadas escritas diretamente neste corpo: `JSON.parse`, `JSON.stringify`, `Struct.fromJson`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewedDestination`.

SHA-256 do trecho: `fda3091542ee81c4f089de4a11c31f4b8b7f35e94eb2d4b62ffcec3d267d9f55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
