# `isTerminalHarnessMigrationRpcError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/resume-ownership/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708810-708812](../../../../../../../reference/runtime/host-main.cjs#L708810-L708812) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708810-708812](../../../../../../../reference/runtime/host-main.cjs#L708810-L708812) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:708810

Chamadas escritas diretamente neste corpo: `ConnectError.from`, `TERMINAL_MIGRATION_RPC_CODES.has`.

SHA-256 do trecho: `59db05f15f9512baf5cd3c5d9b41b203f35fb510799810f73a08317433eaaea0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
