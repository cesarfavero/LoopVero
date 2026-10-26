# `McpRepairsThisTurn.noteSignIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780170-780174](../../../../../../../reference/runtime/host-main.cjs#L780170-L780174) | `method` | não | `serverId, accountKey` |
| [evaluation:580415-580419](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580415-L580419) | `method` | não | `serverId, accountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780170-780174](../../../../../../../reference/runtime/host-main.cjs#L780170-L780174) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:580415-580419](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580415-L580419) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:780170

Chamadas escritas diretamente neste corpo: `accountKeys.add`, `new Set`, `this.signInsByServerId.get`, `this.signInsByServerId.set`.

SHA-256 do trecho: `29c2b6326248e9145b4308f60e5d7f4171370cbcbfd1ca0417f67d70f155af0a`.

### evaluation:580415

Chamadas escritas diretamente neste corpo: `accountKeys.add`, `new Set`, `this.signInsByServerId.get`, `this.signInsByServerId.set`.

SHA-256 do trecho: `29c2b6326248e9145b4308f60e5d7f4171370cbcbfd1ca0417f67d70f155af0a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
