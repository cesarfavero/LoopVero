# `provesOsPermissionGranted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/sand-device-local-tools.ts` · [README do módulo](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759530-759532](../../../../../../reference/runtime/host-main.cjs#L759530-L759532) | `FunctionDeclaration` | não | `toolId` |
| [evaluation:549690-549692](../../../../../../reference/runtime/sand-eval-runner.cjs#L549690-L549692) | `FunctionDeclaration` | não | `toolId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759530-759532](../../../../../../reference/runtime/host-main.cjs#L759530-L759532) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549690-549692](../../../../../../reference/runtime/sand-eval-runner.cjs#L549690-L549692) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759530

Chamadas escritas diretamente neste corpo: `COMPUTER_USE_TOOLS_WITHOUT_OS_PERMISSION.has`.

SHA-256 do trecho: `cd206551632ce1795efa201ec286243cfa72238646d0a3cefb1258f8b762fe42`.

### evaluation:549690

Chamadas escritas diretamente neste corpo: `COMPUTER_USE_TOOLS_WITHOUT_OS_PERMISSION.has`.

SHA-256 do trecho: `cd206551632ce1795efa201ec286243cfa72238646d0a3cefb1258f8b762fe42`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
