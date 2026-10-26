# `formatDeviceLocalToolResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/device-local-tool.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-local-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758423-758441](../../../../../../reference/runtime/host-main.cjs#L758423-L758441) | `FunctionDeclaration` | não | `result, tool` |
| [evaluation:548583-548601](../../../../../../reference/runtime/sand-eval-runner.cjs#L548583-L548601) | `FunctionDeclaration` | não | `result, tool` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758423-758441](../../../../../../reference/runtime/host-main.cjs#L758423-L758441) | 8 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:548583-548601](../../../../../../reference/runtime/sand-eval-runner.cjs#L548583-L548601) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:758423

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `sandNoPhoneForLocalToolMessage`.

SHA-256 do trecho: `ecf47a50fef2dd5a3143594a3013e7c8b034d59579795206a8a09c8d404a4ba8`.

### evaluation:548583

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `sandNoPhoneForLocalToolMessage`.

SHA-256 do trecho: `ecf47a50fef2dd5a3143594a3013e7c8b034d59579795206a8a09c8d404a4ba8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
